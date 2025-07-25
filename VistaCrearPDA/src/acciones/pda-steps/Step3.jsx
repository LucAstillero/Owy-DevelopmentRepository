/*STEP3 - CALCULATION STEP*/
import FileDropBox from "../../elementos/filedropbox";
import React, { useState } from "react";
import { ReactComponent as DropIcon } from "../../assets/icons/IconDrop.svg";
import { ReactComponent as SoloWhiteIcon } from "../../assets/icons/soloW.svg";
import { ReactComponent as SoloGreyIcon } from "../../assets/icons/soloG.svg";
import { ReactComponent as GroupGreyIcon } from "../../assets/icons/groupG.svg";
import { ReactComponent as GroupWhiteIcon } from "../../assets/icons/groupW.svg";

function Step3() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="step3">
      <div className="header-objective-3">
        ¿Ya tienes algo hecho o empiezas desde cero?
      </div>
      <div className="text-obj-wrapper-step3">
        <div className="text-objective-3">
          Añade el archivo, el documento, la presentación, imágenes, etc. de lo
          que lleves hecho. Déjalo en blanco si no has empezado.
        </div>
      </div>
      <div className="dropbox-content">
        <FileDropBox />
        <div className="upload-icon-container">
          <DropIcon />
        </div>
      </div>
      <div className="header-content-3">
        ¿Trabajas individualmente o en grupo?
      </div>
      <div className="buttons-worktype">
        <button
          className={`buttons-ind ${
            selected === "individual" ? "selected" : ""
          }`}
          onClick={() => setSelected("individual")}
        >
          {selected === "individual" ? <SoloWhiteIcon /> : <SoloGreyIcon />}
          Individual
        </button>
        <button
          className={`buttons-grupo ${selected === "group" ? "selected" : ""}`}
          onClick={() => setSelected("group")}
        >
          {selected === "group" ? <GroupWhiteIcon /> : <GroupGreyIcon />} Grupo
        </button>
      </div>
    </div>
  );
}
export default Step3;
