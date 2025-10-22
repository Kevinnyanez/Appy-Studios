// Configuración de EmailJS
// Para usar EmailJS, necesitas:
// 1. Crear una cuenta en https://emailjs.com
// 2. Crear un servicio de email (Gmail, Outlook, etc.)
// 3. Crear una plantilla de email
// 4. Obtener tus credenciales

export const EMAILJS_CONFIG = {
  // Reemplaza estos valores con tus credenciales reales de EmailJS
  SERVICE_ID: 'service_xxxxxxx', // Tu Service ID de EmailJS
  TEMPLATE_ID: 'template_xxxxxxx', // Tu Template ID de EmailJS
  PUBLIC_KEY: 'xxxxxxxxxxxxxxx', // Tu Public Key de EmailJS
  
  // Email predefinido donde se enviará el brief
  DEFAULT_EMAIL: 'appystudiosweb@gmail.com',
  
  // Número de WhatsApp predefinido
  DEFAULT_WHATSAPP: '+5492922442186',
};

// Plantilla de email sugerida para EmailJS:
/*
Hola,

Te envío el brief de mi proyecto: {{project_type}}

{{message}}

Saludos cordiales,
{{from_name}}

---
Este email fue generado automáticamente por Brand Brief Generator.
*/
