import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrandBriefData } from './types';
import { ProgressBar } from './ProgressBar';
import { WelcomeStep } from './steps/WelcomeStep';
import { ObjectiveStep } from './steps/website/ObjectiveStep';
import { VisualStyleStep } from './steps/website/VisualStyleStep';
import { SectionsStep } from './steps/website/SectionsStep';
import { AudienceStep } from './steps/website/AudienceStep';
import { FeaturesStep } from './steps/webapp/FeaturesStep';
import { RolesStep } from './steps/webapp/RolesStep';
import { DataHandlingStep } from './steps/webapp/DataHandlingStep';
import { CategoryStep } from './steps/webapp/CategoryStep';
import { BudgetStep } from './steps/BudgetStep';
import { SummaryStep } from './steps/SummaryStep';
import { useSupabase } from '@/hooks/useSupabase';
import { BackgroundSlider } from './BackgroundSlider';

const STORAGE_KEY = 'brand-brief-data';

export const BrandBriefWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<BrandBriefData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { projectType: null };
  });
  const { isConnected, isLoading, error } = useSupabase();

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateData = (updates: Partial<BrandBriefData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(0, prev - 1));

  const getSteps = () => {
    const steps = [WelcomeStep];
    
    if (data.projectType === 'website') {
      steps.push(ObjectiveStep, VisualStyleStep, SectionsStep, AudienceStep, BudgetStep, SummaryStep);
    } else if (data.projectType === 'webapp') {
      steps.push(FeaturesStep, RolesStep, CategoryStep, DataHandlingStep, BudgetStep, SummaryStep);
    }
    
    return steps;
  };

  const steps = getSteps();
  const CurrentStepComponent = steps[currentStep];
  const totalSteps = steps.length - 1; // Exclude summary from count

  return (
    <div className="min-h-screen relative overflow-hidden bg-black flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Background Slider */}
      <BackgroundSlider />
      
      {/* Overlay oscuro con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/40 to-black/80 backdrop-blur-sm"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-4xl">
        {currentStep > 0 && currentStep < steps.length - 1 && (
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        )}
        
        <AnimatePresence mode="wait">
          <CurrentStepComponent
            key={currentStep}
            data={data}
            updateData={updateData}
            onNext={nextStep}
            onBack={prevStep}
            isFirst={currentStep === 0}
            isLast={currentStep === steps.length - 2}
          />
        </AnimatePresence>
      </div>
      
      <footer className="mt-12 text-center text-sm text-white/70">
        <p className="text-white/90 font-medium">Brand Brief - Definí tu proyecto paso a paso</p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-400 animate-pulse' : isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
          <span className="text-xs text-white/60">
            {isLoading ? 'Conectando...' : isConnected ? 'Supabase conectado' : `Error: ${error}`}
          </span>
        </div>
      </footer>
    </div>
  );
};
