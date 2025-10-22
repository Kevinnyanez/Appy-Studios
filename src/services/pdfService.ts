import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BrandBriefData } from '@/components/BrandBrief/types';

export class PDFService {
  static async generatePDF(data: BrandBriefData, elementId: string): Promise<Blob> {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Elemento no encontrado para generar PDF');
    }

    // Generar canvas del elemento
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    // Agregar imagen al PDF
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // Si el contenido es más alto que una página, agregar páginas adicionales
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    return pdf.output('blob');
  }

  static downloadPDF(blob: Blob, filename: string = 'brand-brief.pdf') {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  static async generateAndDownloadPDF(data: BrandBriefData, elementId: string) {
    try {
      const blob = await this.generatePDF(data, elementId);
      this.downloadPDF(blob);
      return true;
    } catch (error) {
      console.error('Error generando PDF:', error);
      throw error;
    }
  }
}
