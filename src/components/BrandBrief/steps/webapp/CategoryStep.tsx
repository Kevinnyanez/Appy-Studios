import { motion } from 'framer-motion';
import { StepProps } from '../../types';
import { Navigation } from '../../Navigation';
import { Card } from '@/components/ui/card';
import { 
  BarChart3, 
  Calendar, 
  ShoppingCart, 
  Users, 
  FileText, 
  Briefcase,
  Database,
  Lightbulb
} from 'lucide-react';

const categories = [
  { id: 'management', name: 'Gestión / CRM', icon: Briefcase },
  { id: 'booking', name: 'Reservas / Turnos', icon: Calendar },
  { id: 'ecommerce', name: 'E-commerce / Tienda', icon: ShoppingCart },
  { id: 'social', name: 'Red Social / Comunidad', icon: Users },
  { id: 'analytics', name: 'Analytics / Dashboard', icon: BarChart3 },
  { id: 'content', name: 'Contenido / Blog', icon: FileText },
  { id: 'data', name: 'Base de Datos / Archivo', icon: Database },
  { id: 'other', name: 'Otro', icon: Lightbulb },
];

export const CategoryStep = ({ data, updateData, onNext, onBack }: StepProps) => {
  const handleSelect = (categoryId: string) => {
    updateData({ projectCategory: categoryId });
    setTimeout(onNext, 300);
  };

  const canProceed = true; // No es obligatorio llenar

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
          Categoría del Proyecto
        </h2>
        <p className="text-xl text-white/90 font-semibold mb-2">
          Paso 3 de 5
        </p>
        <p className="text-lg text-white/80 font-medium">
          ¿Qué tipo de aplicación web estás creando?
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card
              key={category.id}
              className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl group bg-transparent border-2 ${
                data.projectCategory === category.id 
                  ? 'border-white/40 bg-white/10' 
                  : 'border-white/20 hover:bg-white/5 hover:border-white/30'
              }`}
              onClick={() => handleSelect(category.id)}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <p className="text-sm font-medium text-white group-hover:text-white/90 transition-all duration-300">{category.name}</p>
              </div>
            </Card>
          );
        })}
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
