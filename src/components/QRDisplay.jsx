import s from "./QRDisplay.module.css";
import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";
import Btn from "./Btn/Btn";

function QRDisplay({ text }) {
  const qrRef = useRef();

  const downloadQR = () => {
    // Buscar el canvas en el DOM
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    // Descargar la imagen directamente
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className={s.container}>
      <div
        ref={qrRef}
        className={s.qrDiv}
      >
        {text ? <QRCodeCanvas value={text} size={220}  bgColor="white" marginSize={2} /> : "QR"}
      </div>
      <Btn onClick={downloadQR} text={"Download QR"} disabled={!text} />
    </div>
  );
}

export default QRDisplay;
