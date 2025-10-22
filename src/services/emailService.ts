import emailjs from '@emailjs/browser';
import { BrandBriefData } from '@/components/BrandBrief/types';
import { EMAILJS_CONFIG } from '@/config/emailjs';

export class EmailService {
  private static readonly SERVICE_ID = EMAILJS_CONFIG.SERVICE_ID;
  private static readonly TEMPLATE_ID = EMAILJS_CONFIG.TEMPLATE_ID;
  private static readonly PUBLIC_KEY = EMAILJS_CONFIG.PUBLIC_KEY;

  static initialize() {
    emailjs.init(this.PUBLIC_KEY);
  }

  static async sendBrandBrief(
    data: BrandBriefData, 
    recipientEmail: string = EMAILJS_CONFIG.DEFAULT_EMAIL,
    pdfBlob?: Blob
  ): Promise<boolean> {
    try {
      this.initialize();

      // Convertir el blob del PDF a base64 si se proporciona
      let pdfBase64 = '';
      if (pdfBlob) {
        pdfBase64 = await this.blobToBase64(pdfBlob);
      }

      const templateParams = {
        to_email: recipientEmail,
        project_type: data.projectType === 'website' ? 'Página Web' : 'Aplicación Web',
        main_objective: data.mainObjective || 'No especificado',
        visual_style: data.visualStyle || 'No especificado',
        sections: data.sections?.join(', ') || 'No especificado',
        target_audience: data.targetAudience || 'No especificado',
        main_features: data.mainFeatures?.join(', ') || 'No especificado',
        user_roles: data.userRoles?.join(', ') || 'No especificado',
        data_handling: data.dataHandling || 'No especificado',
        project_category: data.projectCategory?.replace('-', ' ') || 'No especificado',
        pdf_attachment: pdfBase64,
        from_name: 'Brand Brief Generator',
        message: this.generateEmailMessage(data)
      };

      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );

      console.log('Email enviado exitosamente:', response);
      return true;
    } catch (error) {
      console.error('Error enviando email:', error);
      throw error;
    }
  }

  private static async blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]); // Remover el prefijo data:application/pdf;base64,
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  private static generateEmailMessage(data: BrandBriefData): string {
    const isWebsite = data.projectType === 'website';
    
    let message = `Resumen del Brief de ${isWebsite ? 'Página Web' : 'Aplicación Web'}:\n\n`;
    
    if (isWebsite) {
      message += `Objetivo Principal: ${data.mainObjective || 'No especificado'}\n`;
      message += `Estilo Visual: ${data.visualStyle || 'No especificado'}\n`;
      message += `Secciones: ${data.sections?.join(', ') || 'No especificado'}\n`;
      message += `Público Objetivo: ${data.targetAudience || 'No especificado'}\n`;
    } else {
      message += `Funcionalidades: ${data.mainFeatures?.join(', ') || 'No especificado'}\n`;
      message += `Roles de Usuario: ${data.userRoles?.join(', ') || 'No especificado'}\n`;
      message += `Manejo de Datos: ${data.dataHandling || 'No especificado'}\n`;
      message += `Categoría: ${data.projectCategory?.replace('-', ' ') || 'No especificado'}\n`;
    }
    
    message += `\nEste brief fue generado automáticamente usando Brand Brief Generator.`;
    
    return message;
  }

  // Método alternativo usando Supabase para envío de emails
  static async sendViaSupabase(data: BrandBriefData, recipientEmail: string): Promise<boolean> {
    try {
      // Aquí podrías implementar una función Edge de Supabase para enviar emails
      // Por ahora, simularemos el envío
      console.log('Enviando email via Supabase a:', recipientEmail);
      console.log('Datos del brief:', data);
      
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return true;
    } catch (error) {
      console.error('Error enviando email via Supabase:', error);
      throw error;
    }
  }
}
