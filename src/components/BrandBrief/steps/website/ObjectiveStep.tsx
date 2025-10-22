import { motion } from 'framer-motion';
import { StepProps } from '../../types';
import { Navigation } from '../../Navigation';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const ObjectiveStep = ({ data, updateData, onNext, onBack }: StepProps) => {
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
          Objetivo Principal
        </h2>
        <p className="text-xl text-white/90 font-semibold mb-2">
          Paso 1 de 5
        </p>
        <p className="text-lg text-white/80 font-medium">
          ¿Cuál es el objetivo principal de tu sitio web?
        </p>
      </div>

      <div className="space-y-6">
        <Label htmlFor="objective" className="text-white/90 text-lg font-semibold">
          Describí brevemente qué querés lograr con tu página
        </Label>
        <Textarea
          id="objective"
          placeholder="Ej: Mostrar mi portafolio de diseño y conseguir clientes potenciales..."
          value={data.mainObjective || ''}
          onChange={(e) => updateData({ mainObjective: e.target.value })}
          rows={6}
          className="resize-none bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/20 backdrop-blur-sm"
        />
        <p className="text-sm text-white/70">
          Mínimo 10 caracteres
        </p>
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
