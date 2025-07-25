/*STEP2 - PREPARATION STEP*/
import React, { useState } from "react";
import FileDropBox from "../../elementos/filedropbox";
import { ReactComponent as DropIcon } from "../../assets/icons/IconDrop.svg";

function Step2() {
  const [text, setText] = useState("");

  return (
    <div className="step2">
      <div className="header-objective">Describe brevemente el objetivo</div>
      <div className="text-obj-wrapper-step2">
        <div className="text-objective">
          Por ejemplo: ensayo 1500 palabras, presentación de diapositivas,
          examen de 5 temas, entrega, etc.
        </div>
      </div>
      <div className="input-objective">
        <input
          className="inner-input-objective"
          type="text"
          placeholder="¡Escríbelo!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="header-content">Añade contenido clave</div>
      <div className="text-cont-wrapper-step2">
        <div className="text-content">
          Enunciado, guía docente, tutoriales, apuntes, lecturas, etc. (máximo
          10)
        </div>
      </div>
      <div className="dropbox-content">
        <FileDropBox />
        <div className="upload-icon-container">
          <DropIcon />
        </div>
      </div>
    </div>
  );
}
export default Step2;
