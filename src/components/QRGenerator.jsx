import s from "./QRGenerator.module.css";
import { useState } from "react";
import QRInput from "./QRInput";
import QRDisplay from "./QRDisplay";
import logo from "../assets/logo.png";

function QRGenerator() {
  const [qrText, setQrText] = useState("");

  return (
    <>
      <div className={s.container}>
          <div className={s.box}>
              <img src={logo} alt="logo" className={s.logo} />
              <h2 className={s.title}>QR Code Generator</h2>
              <QRInput onGenerate={setQrText} />
              <QRDisplay text={qrText} />
          </div>
          <div>
        <p className={s.footer}>elovejo.com with ❤️</p>
      </div>
      </div>
    </>
  );
}

export default QRGenerator;
