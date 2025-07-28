# QR Code Generator

A simple, modern, and customizable QR code generator built with **React** and **Vite**.

## 🧩 Description

This application lets you generate QR codes from any text or URL. You can download the generated QR code as a PNG image. The design is responsive, clean, and built with reusable components.

## 🚀 Live Demo

Check out the live demo:  
🔗 [https://elovejo.com/qr](https://elovejo.com/qr)

## ⚙️ Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/elovejo/qr.git
   cd qr
   ```
2. Install the dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## 📦 Available Scripts

| Command           | Description                             |
|-------------------|-----------------------------------------|
| `npm run dev`     | Starts the development server           |
| `npm run build`   | Builds the app for production           |
| `npm run preview` | Previews the production build           |
| `npm run lint`    | Runs ESLint to analyze code quality     |

## 🗂️ Project Structure

```
src/
├── App.jsx
├── App.css
├── main.jsx
├── assets/
│   └── logo.png
├── components/
│   ├── QRGenerator.jsx
│   ├── QRInput.jsx
│   ├── QRDisplay.jsx
│   └── Btn/
│       ├── Btn.jsx
│       └── Icons.jsx
```

## 🛠️ Technologies Used

- ⚛️ [React 19](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🔳 [qrcode.react](https://github.com/zpao/qrcode.react)
- 🎨 CSS Modules

## ✏️ Customization

- You can update styles by editing the `.module.css` files inside each component.
- The editable logo is located at: `src/assets/logo.png`.

## 📄 License

Distributed under the [MIT](LICENSE) license.
