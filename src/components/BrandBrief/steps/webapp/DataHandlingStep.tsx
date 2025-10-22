import { motion } from 'framer-motion';
import { StepProps } from '../../types';
import { Navigation } from '../../Navigation';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const DataHandlingStep = ({ data, updateData, onNext, onBack }: StepProps) => {
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
          Contexto y Problemática
        </h2>
        <p className="text-xl text-white/90 font-semibold mb-2">
          Paso 4 de 5
        </p>
        <p className="text-lg text-white/80 font-medium">
          ¿Para qué usarías la aplicación y qué problema te lleva a necesitarla?
        </p>
      </div>

      <div className="space-y-6">
        <Label htmlFor="dataHandling" className="text-white/90 text-lg font-semibold">
          Describí el contexto de uso y la problemática que quieres resolver
        </Label>
        <Textarea
          id="dataHandling"
          placeholder="Ej: Necesito una aplicación para gestionar mi negocio de venta de productos porque actualmente manejo todo en Excel y se me complica el control de stock y clientes..."
          value={data.dataHandling || ''}
          onChange={(e) => updateData({ dataHandling: e.target.value })}
          rows={6}
          className="resize-none bg-white/5 border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:ring-white/20 backdrop-blur-sm"
        />
        <p className="text-sm text-white/70">
          Incluí el contexto de tu negocio o situación actual
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
