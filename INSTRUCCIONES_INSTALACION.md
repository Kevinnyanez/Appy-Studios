# 🚀 Appy Studios - Brand Brief

## 📋 Descripción
Este es un wizard interactivo para crear briefs de proyectos web. Permite a los usuarios definir sus necesidades paso a paso y generar un resumen que pueden compartir.

## 🛠️ Instalación y Configuración

### 1. 📥 Clonar el proyecto
```bash
git clone [URL_DEL_REPOSITORIO]
cd appy-studios
```

### 2. 📦 Instalar dependencias
```bash
npm install
```

### 3. ⚙️ Configurar variables de entorno
Crear archivo `.env` en la raíz del proyecto:
```env
VITE_SUPABASE_URL=tu_url_de_supabase
VITE_SUPABASE_PUBLISHABLE_KEY=tu_clave_publica_de_supabase
```

**⚠️ IMPORTANTE**: Cada persona debe crear su propia base de datos en Supabase:
1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta gratuita
3. Crea un nuevo proyecto
4. Copia tu URL y clave pública
5. Reemplaza los valores en el archivo `.env`

### 4. 🔧 Configurar EmailJS (Opcional)
Editar `src/config/emailjs.ts` con tus credenciales:
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'tu_service_id',
  TEMPLATE_ID: 'tu_template_id', 
  PUBLIC_KEY: 'tu_public_key',
  DEFAULT_EMAIL: 'tu_email@ejemplo.com',
  DEFAULT_WHATSAPP: '+5491234567890',
};
```

### 5. 🎨 Personalizar branding
- Cambiar logo: Reemplazar `public/2.png`
- Cambiar favicon: Reemplazar `public/favicon.ico`
- Modificar textos: Editar componentes en `src/components/BrandBrief/steps/`

### 6. 💰 Personalizar precios
Editar `src/components/BrandBrief/steps/BudgetStep.tsx`:
- `websiteBudgetOptions`: Precios para páginas web
- `webappBudgetOptions`: Precios para aplicaciones web

### 7. 🚀 Ejecutar el proyecto
```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── BrandBrief/
│       ├── steps/
│       │   ├── website/     # Pasos para páginas web
│       │   ├── webapp/      # Pasos para aplicaciones web
│       │   └── BudgetStep.tsx
│       ├── BackgroundSlider.tsx
│       └── BrandBriefWizard.tsx
├── config/
│   └── emailjs.ts          # Configuración de EmailJS
├── services/
│   ├── emailService.ts     # Servicio de email
│   ├── pdfService.ts       # Generación de PDF
│   └── whatsappService.ts  # Integración con WhatsApp
└── hooks/
    └── useSupabase.ts      # Hook de Supabase
```

## 🎯 Características

### ✅ Funcionalidades implementadas:
- 🌙 Tema oscuro profesional
- 🎨 Slider de fondo con logo de agencia
- 📱 Diseño responsive
- 📊 Wizard paso a paso
- 💾 Persistencia en localStorage
- 📄 Generación de PDF
- 📱 Compartir por WhatsApp
- 🔗 Integración con Supabase
- 💰 Presupuestos diferenciados por tipo

### 🔧 Personalización fácil:
- **Textos**: Editar componentes React
- **Precios**: Modificar arrays en BudgetStep
- **Colores**: Cambiar clases de Tailwind
- **Logo**: Reemplazar imagen en public/
- **WhatsApp**: Cambiar número en config

## 📞 Contacto y Soporte
Para dudas o modificaciones, contactar al desarrollador original.

## 📄 Licencia
MIT License - Libre para uso y modificación.
