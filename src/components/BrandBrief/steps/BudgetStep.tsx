import { motion } from 'framer-motion';
import { StepProps } from '../types';
import { Navigation } from '../Navigation';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

const websiteBudgetOptions = [
  {
    id: 'basic',
    range: '$200.000 - $400.000 ARS',
    description: 'Proyecto básico con funcionalidades esenciales'
  },
  {
    id: 'standard',
    range: '$400.000 - $700.000 ARS',
    description: 'Proyecto estándar con diseño personalizado'
  },
  {
    id: 'premium',
    range: 'Más de $700.000 ARS',
    description: 'Proyecto premium con funcionalidades avanzadas'
  }
];

const webappBudgetOptions = [
  {
    id: 'basic',
    range: '$300.000 - $450.000 ARS',
    description: 'Aplicación básica con funcionalidades esenciales'
  },
  {
    id: 'standard',
    range: '$450.000 - $750.000 ARS',
    description: 'Aplicación estándar con diseño personalizado'
  },
  {
    id: 'premium',
    range: 'Más de $750.000 ARS',
    description: 'Aplicación premium con funcionalidades avanzadas'
  }
];

export const BudgetStep = ({ data, updateData, onNext, onBack }: StepProps) => {
  const canProceed = !!data.budget;
  
  // Seleccionar las opciones según el tipo de proyecto
  const budgetOptions = data.projectType === 'webapp' ? webappBudgetOptions : websiteBudgetOptions;

  const handleSelect = (budget: string) => {
    updateData({ budget });
    setTimeout(onNext, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
          Presupuesto
        </h2>
        <p className="text-xl text-white/90 font-semibold mb-2">
          Paso 5 de 5
        </p>
        <p className="text-lg text-white/80 font-medium">
          ¿Cuál es tu presupuesto aproximado para el proyecto?
        </p>
      </div>

      <div className="space-y-6">
        <Label className="text-white/90 text-lg font-semibold">
          Seleccioná el rango que mejor se ajuste a tu presupuesto
        </Label>
        
        <div className="grid gap-4">
          {budgetOptions.map((option) => (
            <Card
              key={option.id}
              className={`p-6 cursor-pointer transition-all duration-300 bg-transparent border-2 hover:scale-105 hover:shadow-2xl group ${
                data.budget === option.range
                  ? 'border-white/40 bg-white/10'
                  : 'border-white/20 hover:bg-white/5 hover:border-white/30'
              }`}
              onClick={() => handleSelect(option.range)}
            >
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-white/90 transition-all duration-300">
                  {option.range}
                </h3>
                <p className="text-white/80 group-hover:text-white/90 transition-all duration-300">
                  {option.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        <p className="text-sm text-white/70 text-center">
          Esto nos ayuda a entender mejor el alcance del proyecto
        </p>
      </div>

      <Navigation
        onBack={onBack}
        onNext={onNext}
        isFirst={false}
        isLast={true}
        canProceed={canProceed}
      />
    </motion.div>
  );
};
