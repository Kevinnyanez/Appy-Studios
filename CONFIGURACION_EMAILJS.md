# Configuración de EmailJS para Envío de Emails

## Pasos para configurar EmailJS

### 1. Crear cuenta en EmailJS
- Ve a [https://emailjs.com](https://emailjs.com)
- Crea una cuenta gratuita
- Verifica tu email

### 2. Configurar un servicio de email
- En el dashboard, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona tu proveedor de email (Gmail, Outlook, etc.)
- Sigue las instrucciones para conectar tu cuenta

### 3. Crear una plantilla de email
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- Usa esta plantilla sugerida:

```
Asunto: Brief de Proyecto - {{project_type}}

Hola,

Te envío el brief de mi proyecto: {{project_type}}

{{message}}

Saludos cordiales,
{{from_name}}

---
Este email fue generado automáticamente por Brand Brief Generator.
```

### 4. Obtener las credenciales
- Ve a "Account" > "General"
- Copia tu "Public Key"
- Ve a "Email Services" y copia tu "Service ID"
- Ve a "Email Templates" y copia tu "Template ID"

### 5. Configurar en el proyecto
- Abre `src/config/emailjs.ts`
- Reemplaza los valores:
  - `SERVICE_ID`: Tu Service ID
  - `TEMPLATE_ID`: Tu Template ID
  - `PUBLIC_KEY`: Tu Public Key
  - `DEFAULT_EMAIL`: Tu email donde recibir los briefs
  - `DEFAULT_WHATSAPP`: Tu número de WhatsApp

## Variables de la plantilla

Las siguientes variables están disponibles en tu plantilla de email:
- `{{project_type}}`: Tipo de proyecto (Página Web / Aplicación Web)
- `{{main_objective}}`: Objetivo principal
- `{{visual_style}}`: Estilo visual
- `{{sections}}`: Secciones (para websites)
- `{{target_audience}}`: Público objetivo
- `{{main_features}}`: Funcionalidades principales
- `{{user_roles}}`: Roles de usuario
- `{{data_handling}}`: Manejo de datos
- `{{project_category}}`: Categoría del proyecto
- `{{message}}`: Mensaje completo del brief
- `{{from_name}}`: Nombre del remitente

## Límites gratuitos

El plan gratuito de EmailJS incluye:
- 200 emails por mes
- 2 servicios de email
- 3 plantillas
- Soporte por email

## Configuración alternativa con Supabase

Si prefieres usar Supabase en lugar de EmailJS, puedes implementar una función Edge de Supabase para enviar emails. El código ya está preparado para esto en `EmailService.sendViaSupabase()`.
