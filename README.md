# Portafolio web personal

Este proyecto es un portafolio construido con React, Vite y Tailwind CSS. El formulario de contacto funciona con EmailJS, por lo que no necesita un backend propio para enviar mensajes.

## Instalación

1. Asegúrate de tener Node.js instalado.
2. Clona el repositorio.
3. Abre la carpeta del proyecto en tu terminal.
4. Ejecuta:
   ```bash
   npm install
   ```

## Configurar EmailJS

1. Crea una cuenta en https://www.emailjs.com/
2. Configura un servicio en EmailJS.
3. Crea una plantilla de correo (Email Template) y usa estas variables en el cuerpo:
   ```text
   Nombre: {{from_name}}
   Email: {{from_email}}
   Empresa: {{company}}
   Tipo de proyecto: {{project_type}}

   Mensaje:
   {{message}}
   ```
4. En los campos de la plantilla de EmailJS, ajusta:
   - Subject: `Nuevo mensaje de {{from_name}}`
   - From Name: `{{from_name}}`
   - Reply To: `{{from_email}}`
5. Copia los valores de:
   - Service ID
   - Template ID
   - Public Key

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con estas variables:

```env
VITE_EMAILJS_SERVICE_ID="YOUR_EMAILJS_SERVICE_ID"
VITE_EMAILJS_TEMPLATE_ID="YOUR_EMAILJS_TEMPLATE_ID"
VITE_EMAILJS_PUBLIC_KEY="YOUR_EMAILJS_PUBLIC_KEY"
```

> NUNCA SUBAS TU ARCHIVO `.env` a GitHub.

## Ejecución local

```bash
npm run dev
```

Abre la aplicación en el navegador usando la URL que indique Vite (normalmente `http://localhost:3000`).