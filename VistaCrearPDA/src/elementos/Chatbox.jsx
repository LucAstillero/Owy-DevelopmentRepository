import React from "react";

export default function FloatingChatbox({ lowered, textoPrompt }) {
  return (
    <div className={`chatbox-wrapper ${lowered ? "lowered" : ""}`}>
      <div className="chatbox-inner-wrapper">
        <div className="chatbox-container">
          <span className="textoPrompt">{textoPrompt}</span>
        </div>
      </div>
      <span className="text-disclaimer">
        *Owy y ChatGPT pueden cometer errores, revisa siempre la información.
      </span>
    </div>
  );
}
