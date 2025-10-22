import { motion } from 'framer-motion';
import { StepProps } from '../types';
import { Card } from '@/components/ui/card';

export const WelcomeStep = ({ data, updateData, onNext }: StepProps) => {
  const handleSelect = (type: 'website' | 'webapp') => {
    updateData({ projectType: type });
    setTimeout(onNext, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-tight">
          Crea tu proyecto
        </h1>
        <p className="text-xl text-white/90 font-semibold mb-2">
          En solo 3 minutos
        </p>
        <p className="text-lg text-white/80 font-medium mb-6">
          Definamos juntos tu proyecto. ¿Qué querés crear?
        </p>
        
        </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          className="p-8 cursor-pointer transition-all duration-300 bg-transparent border-2 border-white/20 hover:bg-white/10 hover:backdrop-blur-sm hover:border-white/40 hover:scale-105 hover:shadow-2xl group"
          onClick={() => handleSelect('website')}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <h3 className="text-3xl font-bold text-white group-hover:text-white/90 transition-all duration-300">Página Web</h3>
            <p className="text-white/80 group-hover:text-white/90 transition-all duration-300 text-lg">
              Sitio informativo, portafolio, landing page o blog
            </p>
          </div>
        </Card>

        <Card
          className="p-8 cursor-pointer transition-all duration-300 bg-transparent border-2 border-white/20 hover:bg-white/10 hover:backdrop-blur-sm hover:border-white/40 hover:scale-105 hover:shadow-2xl group"
          onClick={() => handleSelect('webapp')}
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <h3 className="text-3xl font-bold text-white group-hover:text-white/90 transition-all duration-300">Aplicación Web</h3>
            <p className="text-white/80 group-hover:text-white/90 transition-all duration-300 text-lg">
              Sistema, plataforma, dashboard o herramienta interactiva
            </p>
          </div>
        </Card>
      </div>

      {/* Testimonial/Estadística */}
      <div className="text-center mt-8 mb-8">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mx-auto max-w-md">
          <p className="text-white/90 text-lg font-semibold mb-2">
            "Perfecto para definir mi proyecto"
          </p>
          <p className="text-white/70 text-sm">
            Más de 14+ proyectos creados exitosamente
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <p className="text-white/70 text-sm mb-4">
          ¿Necesitás asesoramiento personalizado?
        </p>
        <button 
          onClick={() => window.open('https://wa.me/5492922442186?text=Hola! Me interesa reservar una llamada de asesoramiento para mi proyecto web', '_blank')}
          className="bg-transparent border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
        >
          Reserva una llamada de asesoramiento
        </button>
      </div>
    </motion.div>
  );
};
