import { motion } from 'framer-motion';
import { useState } from 'react';
import { StepProps } from '../types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, MessageCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { WhatsAppService } from '@/services/whatsappService';

export const SummaryStep = ({ data, onBack }: StepProps) => {
  const isWebsite = data.projectType === 'website';
  const [isSendingWhatsApp, setIsSendingWhatsApp] = useState(false);

  const handleSendWhatsApp = async () => {
    setIsSendingWhatsApp(true);
    try {
      await WhatsAppService.generateAndSendWhatsApp(data);
      toast.success('🚀 ¡WhatsApp abierto! El brief está listo para enviar');
    } catch (error) {
      console.error('Error abriendo WhatsApp:', error);
      toast.error('Error al abrir WhatsApp. Intenta nuevamente.');
    } finally {
      setIsSendingWhatsApp(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-400" />
        </div>
        <h2 className="text-4xl font-bold mb-3 text-white">¡Resumen Completo!</h2>
        <p className="text-white/80 text-lg">
          Aquí está toda la información de tu proyecto
        </p>
      </div>

      <Card id="summary-content" className="p-8 space-y-6 bg-black/90 border-white/20 backdrop-blur-md shadow-2xl ring-1 ring-white/10">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">Tipo de Proyecto</h3>
          <p className="text-white/90 text-lg">
            {isWebsite ? '🌐 Página Web' : '💻 Aplicación Web'}
          </p>
        </div>

        {isWebsite ? (
          <>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Objetivo Principal</h3>
              <p className="text-white/90">{data.mainObjective}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Estilo Visual</h3>
              <p className="text-white/90">{data.visualStyle}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Secciones</h3>
              <div className="flex flex-wrap gap-2">
                {data.sections?.map((section) => (
                  <span key={section} className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 rounded-lg text-sm border border-emerald-500/30">
                    {section}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Público Objetivo</h3>
              <p className="text-white/90">{data.targetAudience}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Presupuesto</h3>
              <p className="text-white/90">{data.budget}</p>
            </div>
          </>
        ) : (
          <>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Funcionalidades Principales</h3>
              <div className="flex flex-wrap gap-2">
                {data.mainFeatures?.map((feature) => (
                  <span key={feature} className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-lg text-sm border border-blue-500/30">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Roles de Usuario</h3>
              <div className="flex flex-wrap gap-2">
                {data.userRoles?.map((role) => (
                  <span key={role} className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-lg text-sm border border-purple-500/30">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Contexto y Problemática</h3>
              <p className="text-white/90">{data.dataHandling}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Categoría</h3>
              <p className="text-white/90 capitalize">{data.projectCategory?.replace('-', ' ')}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Presupuesto</h3>
              <p className="text-white/90">{data.budget}</p>
            </div>
          </>
        )}
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Button
          variant="outline"
          onClick={onBack}
          className="flex-1 bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white transition-all duration-300"
        >
          Volver a Editar
        </Button>
        
        <Button
          onClick={handleSendWhatsApp}
          disabled={isSendingWhatsApp}
          className="flex-2 gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg py-6"
        >
          {isSendingWhatsApp ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <MessageCircle className="w-5 h-5" />
          )}
          {isSendingWhatsApp ? 'Abriendo WhatsApp...' : '🚀 Enviar Brief por WhatsApp'}
        </Button>
      </div>
    </motion.div>
  );
};
