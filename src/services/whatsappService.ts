import { BrandBriefData } from '@/components/BrandBrief/types';
import { EMAILJS_CONFIG } from '@/config/emailjs';

export class WhatsAppService {
  private static readonly DEFAULT_PHONE = EMAILJS_CONFIG.DEFAULT_WHATSAPP;

  static generateWhatsAppMessage(data: BrandBriefData): string {
    const isWebsite = data.projectType === 'website';
    
    let message = `🎉 *¡Hola! Aquí tienes el brief de tu proyecto*\n\n`;
    message += `📋 *Resumen del Proyecto:*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    message += `🎯 *Tipo de Proyecto:*\n`;
    message += `${isWebsite ? '🌐 Página Web' : '💻 Aplicación Web'}\n\n`;
    
    if (isWebsite) {
      message += `🎯 *Objetivo Principal:*\n`;
      message += `${data.mainObjective || 'No especificado'}\n\n`;
      
      message += `🎨 *Estilo Visual:*\n`;
      message += `${data.visualStyle || 'No especificado'}\n\n`;
      
      message += `📄 *Secciones Incluidas:*\n`;
      message += `${data.sections?.join(', ') || 'No especificado'}\n\n`;
      
      message += `👥 *Público Objetivo:*\n`;
      message += `${data.targetAudience || 'No especificado'}\n\n`;
    } else {
      message += `⚙️ *Funcionalidades Principales:*\n`;
      message += `${data.mainFeatures?.join(', ') || 'No especificado'}\n\n`;
      
      message += `👤 *Roles de Usuario:*\n`;
      message += `${data.userRoles?.join(', ') || 'No especificado'}\n\n`;
      
      message += `💼 *Contexto y Problemática:*\n`;
      message += `${data.dataHandling || 'No especificado'}\n\n`;
      
      message += `📂 *Categoría:*\n`;
      message += `${data.projectCategory?.replace('-', ' ') || 'No especificado'}\n\n`;
    }
    
    message += `💰 *Presupuesto Estimado:*\n`;
    message += `${data.budget || 'No especificado'}\n\n`;
    
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;
    message += `✨ *¿Te gustaría que conversemos sobre tu proyecto?*\n`;
    message += `📞 *¡Agendemos una llamada para discutir los detalles!*\n\n`;
    message += `_Brief generado por Appy Studios_ 🚀`;
    
    return message;
  }

  static openWhatsApp(message: string, phoneNumber?: string): void {
    const phone = phoneNumber || this.DEFAULT_PHONE;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  }

  static async generateAndSendWhatsApp(
    data: BrandBriefData, 
    phoneNumber?: string,
    includePDF: boolean = false
  ): Promise<void> {
    try {
      let message = this.generateWhatsAppMessage(data);
      
      if (includePDF) {
        // Aquí podrías generar un link al PDF si lo tienes almacenado
        message += `\n\n📎 *PDF del Brief:*\n[Link al PDF disponible]`;
      }
      
      this.openWhatsApp(message, phoneNumber);
    } catch (error) {
      console.error('Error generando mensaje de WhatsApp:', error);
      throw error;
    }
  }

  // Método para generar un enlace que abra WhatsApp con el contenido
  static generateWhatsAppLink(data: BrandBriefData, phoneNumber?: string): string {
    const message = this.generateWhatsAppMessage(data);
    const phone = phoneNumber || this.DEFAULT_PHONE;
    const encodedMessage = encodeURIComponent(message);
    
    return `https://wa.me/${phone}?text=${encodedMessage}`;
  }
}
