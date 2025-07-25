import Iniciador from "../elementos/iniciador";
import datosIniciadores from "../data/iniciadores-data";
import ScrollContainer from "../components/ScrollContainer";
import React, { useState } from "react";
import FloatingChatbox from "../elementos/Chatbox";

export default function Chat() {
  const [textoPrompt, setText] = useState("¡Escríbelo!");
  const [lowerChatbox, setLowerChatbox] = useState(false);

  const iniciadorClick = (prompt) => {
    setText(prompt);
    setLowerChatbox(true);
  };

  return (
    <div className="main-container">
      <div className="container-1">
        <div className="pic" />

        <div className="group">
          <div className="group-2" />
          <span className="text-2">Hola, usuario</span>
        </div>

        <span className="text-3">¿En qué puedo ayudarte?</span>
        <div className="img" />

        <div className="contenedor-principal">
          <div className="wrapper-contenedor-iniciadores">
            <ScrollContainer>
              {Object.values(datosIniciadores).map((iniciador, index) => (
                <Iniciador
                  key={index}
                  {...iniciador}
                  onClick={() => iniciadorClick(iniciador.prompt)}
                />
              ))}
            </ScrollContainer>
          </div>
        </div>
      </div>
      <div className="container-2">
        <FloatingChatbox lowered={lowerChatbox} textoPrompt={textoPrompt} />
      </div>
    </div>
  );
}
