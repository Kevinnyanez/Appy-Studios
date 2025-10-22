# Brand Brief - Define tu Proyecto

## Descripción

Asistente interactivo para definir la identidad de tu marca paso a paso. Crea tu proyecto en pocos clicks con nuestro brief interactivo.

## Características

- ✅ **Brief interactivo**: Define tu proyecto paso a paso
- ✅ **Dos tipos de proyecto**: Página Web y Aplicación Web
- ✅ **Diseño moderno**: Interfaz dark theme con animaciones
- ✅ **Exportación**: Genera PDF y envía por WhatsApp
- ✅ **Responsive**: Funciona en todos los dispositivos

## Tecnologías utilizadas

Este proyecto está construido con:

- **Vite** - Build tool y dev server
- **TypeScript** - Tipado estático
- **React** - Framework de UI
- **shadcn-ui** - Componentes de UI
- **Tailwind CSS** - Estilos y diseño
- **Framer Motion** - Animaciones
- **Supabase** - Base de datos

## Instalación y desarrollo

Para ejecutar el proyecto localmente:

```sh
# Clonar el repositorio
git clone <YOUR_GIT_URL>

# Navegar al directorio del proyecto
cd brand-brief-appy-studios

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de Supabase

# Iniciar el servidor de desarrollo
npm run dev
```

**⚠️ IMPORTANTE**: Cada persona debe crear su propia base de datos en Supabase para evitar conflictos de datos.

## Estructura del proyecto

- `/src/components/BrandBrief/` - Componentes principales del brief
- `/src/components/BrandBrief/steps/` - Pasos del wizard
- `/src/components/BrandBrief/steps/website/` - Pasos específicos para páginas web
- `/src/components/BrandBrief/steps/webapp/` - Pasos específicos para aplicaciones web
- `/src/services/` - Servicios para PDF, email y WhatsApp
- `/src/integrations/supabase/` - Configuración de Supabase

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.
