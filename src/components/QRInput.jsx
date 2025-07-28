import s from "./QRInput.module.css";
import { useState } from "react";
import Btn from "./Btn/Btn";

function QRInput({ onGenerate }) {
  const [text, setText] = useState("");

  const handleGenerate = () => {
    onGenerate(text);
  };

  const handleClear = () => {
    setText("");
    onGenerate(""); // Borra el QR también
  };

  const handleKeyPress = (e) => {
    // Verificar si la tecla presionada es Enter
    if (e.key === "Enter") {
      handleGenerate();
    }
  };

  return (
    <div className={s.container}>
      <div className={s.inputDiv}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a URL..."
          className={s.input}
          onKeyDown={handleKeyPress}
        />
        <Btn onClick={handleClear} iconName={"Refresh"} />
      </div>
      <div className={s.buttons}>
        <Btn onClick={handleGenerate} text={"Generate"} />
      </div>
    </div>
  );
}

export default QRInput;
