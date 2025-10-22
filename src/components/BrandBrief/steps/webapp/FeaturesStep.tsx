import { motion } from 'framer-motion';
import { StepProps } from '../../types';
import { Navigation } from '../../Navigation';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const commonFeatures = [
  'Registro de usuarios',
  'Login / Autenticación',
  'Panel de administración',
  'Dashboard con estadísticas',
  'Sistema de pagos',
  'Gestión de personal',
  'Control de stock',
  'Subida de archivos',
  'Generación de reportes',
  'Gestión de capital',
];

export const FeaturesStep = ({ data, updateData, onNext, onBack }: StepProps) => {
  const [customFeature, setCustomFeature] = useState('');
  const selectedFeatures = data.mainFeatures || [];

  const toggleFeature = (feature: string) => {
    const newFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((f) => f !== feature)
      : [...selectedFeatures, feature];
    updateData({ mainFeatures: newFeatures });
  };

  const addCustomFeature = () => {
    if (customFeature.trim() && !selectedFeatures.includes(customFeature.trim())) {
      updateData({ mainFeatures: [...selectedFeatures, customFeature.trim()] });
      setCustomFeature('');
    }
  };

  const canProceed = true; // No es obligatorio llenar

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
          Funcionalidades Principales
        </h2>
        <p className="text-xl text-white/90 font-semibold mb-2">
          Paso 1 de 5
        </p>
        <p className="text-lg text-white/80 font-medium">
          ¿Qué características necesita tu aplicación?
        </p>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {commonFeatures.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={feature}
                checked={selectedFeatures.includes(feature)}
                onCheckedChange={() => toggleFeature(feature)}
                className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:border-white"
              />
              <Label htmlFor={feature} className="cursor-pointer text-white/90 font-medium">
                {feature}
              </Label>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <Label htmlFor="customFeature" className="text-white/90 text-lg font-semibold">Agregar funcionalidad personalizada</Label>
          <div className="flex gap-2">
            <Input
              id="customFeature"
              placeholder="Ej: Reservas online, Calendario, etc."
              value={customFeature}
              onChange={(e) => setCustomFeature(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addCustomFeature()}
              className="bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/20 backdrop-blur-sm"
            />
            <button
              onClick={addCustomFeature}
              className="px-4 py-2 bg-white/10 text-white rounded-md hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 whitespace-nowrap"
            >
              Agregar
            </button>
          </div>
        </div>

      </div>

      {/* Botón de contacto */}
      <div className="text-center mt-8">
        <button 
          onClick={() => window.open('https://wa.me/5492922442186?text=Hola! Me interesa contactarme para mi proyecto web', '_blank')}
          className="bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm mb-2"
        >
          Contáctate ahora
        </button>
        <p className="text-xs text-white/60">
          Te recomendamos llenar el formulario
        </p>
      </div>

      <Navigation
        onBack={onBack}
        onNext={onNext}
        isFirst={false}
        isLast={false}
        canProceed={canProceed}
      />
    </motion.div>
  );
};
