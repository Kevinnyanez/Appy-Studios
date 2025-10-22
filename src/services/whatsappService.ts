import { BrandBriefData } from '@/components/BrandBrief/types';
import { EMAILJS_CONFIG } from '@/config/emailjs';

export class WhatsAppService {
  private static readonly DEFAULT_PHONE = EMAILJS_CONFIG.DEFAULT_WHATSAPP;

  static generateWhatsAppMessage(data: BrandBriefData): string {
    const isWebsite = data.projectType === 'website';
    
    let message = `🚀 *Brief de ${isWebsite ? 'Página Web' : 'Aplicación Web'}*\n\n`;
    
    if (isWebsite) {
      message += `🎯 *Objetivo Principal:*\n${data.mainObjective || 'No especificado'}\n\n`;
      message += `🎨 *Estilo Visual:*\n${data.visualStyle || 'No especificado'}\n\n`;
      message += `📄 *Secciones:*\n${data.sections?.join(', ') || 'No especificado'}\n\n`;
      message += `👥 *Público Objetivo:*\n${data.targetAudience || 'No especificado'}\n\n`;
    } else {
      message += `⚙️ *Funcionalidades Principales:*\n${data.mainFeatures?.join(', ') || 'No especificado'}\n\n`;
      message += `👤 *Roles de Usuario:*\n${data.userRoles?.join(', ') || 'No especificado'}\n\n`;
      message += `💾 *Manejo de Datos:*\n${data.dataHandling || 'No especificado'}\n\n`;
      message += `📂 *Categoría:*\n${data.projectCategory?.replace('-', ' ') || 'No especificado'}\n\n`;
    }
    
    message += `_Generado con Brand Brief Generator_ ✨`;
    
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
