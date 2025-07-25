# QR Code Generator

Generador de códigos QR simple y moderno hecho con React + Vite.

## Descripción

Esta aplicación permite generar códigos QR a partir de cualquier texto o URL. Puedes descargar el QR generado como imagen PNG. El diseño es responsivo y utiliza componentes personalizados y estilos modernos.

## Demo

¡Puedes ver una demo en producción en [elovejo.com/qr](https://elovejo.com/qr)!

## Instalación

1. Clona este repositorio:
   ```sh
   git clone <url-del-repo>
   cd qr
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```

## Scripts

- `npm run dev` — Inicia el servidor de desarrollo.
- `npm run build` — Genera la versión de producción.
- `npm run preview` — Previsualiza la build de producción.
- `npm run lint` — Ejecuta ESLint para revisar el código.

## Estructura del proyecto

```
src/
  App.jsx
  App.css
  main.jsx
  assets/
    logo.png
  components/
    QRGenerator.jsx
    QRInput.jsx
    QRDisplay.jsx
    Btn/
      Btn.jsx
      Icons.jsx
```

## Tecnologías principales

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [qrcode.react](https://github.com/zpao/qrcode.react)
- CSS Modules

## Personalización

- Puedes modificar los estilos en los archivos `.module.css` dentro de cada componente.
- El logo se encuentra en `src/assets/logo.png`.

## Licencia

MIT
