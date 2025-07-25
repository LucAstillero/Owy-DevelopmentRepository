/*STEP4 - WORK MODE STEP*/
import React, { useState } from "react";
import { ReactComponent as SoloWhiteIcon } from "../../assets/icons/soloW.svg";
import { ReactComponent as SoloGreyIcon } from "../../assets/icons/soloG.svg";
import { ReactComponent as GroupGreyIcon } from "../../assets/icons/groupG.svg";
import { ReactComponent as GroupWhiteIcon } from "../../assets/icons/groupW.svg";

function Step4() {
  const [selected, setSelected] = useState(null);
  const [timeS, setTimeS] = useState("");
  const [timeF, setTimeF] = useState("");

  return (
    <div className="step4">
      <div className="buttons-workpref">
        <button
          className={`buttons-maraton ${
            selected === "maraton" ? "selected" : ""
          }`}
          onClick={() => setSelected("maraton")}
        >
          <div className="wpref-icon">
            {selected === "maraton" ? <SoloWhiteIcon /> : <SoloGreyIcon />}
          </div>
          <div className="wpref-button-content">
            <div className="wpref-button-title">Maratón</div>
            <div className="wpref-button-text">Todos los días un poco</div>
          </div>
        </button>
        <button
          className={`buttons-sprint ${
            selected === "sprint" ? "selected" : ""
          }`}
          onClick={() => setSelected("sprint")}
        >
          <div className="wpref-icon">
            {selected === "sprint" ? <GroupWhiteIcon /> : <GroupGreyIcon />}
          </div>
          <div className="wpref-button-content">
            <div className="wpref-button-title">Sprint</div>
            <div className="wpref-button-text">Bloques largos concentrados</div>
          </div>
        </button>
        <button
          className={`buttons-mixto ${selected === "mixto" ? "selected" : ""}`}
          onClick={() => setSelected("mixto")}
        >
          <div className="wpref-icon">
            {selected === "mixto" ? <GroupWhiteIcon /> : <GroupGreyIcon />}
          </div>
          <div className="wpref-button-content">
            <div className="wpref-button-title">Mixto</div>
            <div className="wpref-button-text">
              1h/ día + bloq. largos Sáb. y Dom.
            </div>
          </div>
        </button>
        <button
          className={`buttons-elige ${selected === "elige" ? "selected" : ""}`}
          onClick={() => setSelected("elige")}
        >
          <div className="wpref-icon">
            {selected === "elige" ? <GroupWhiteIcon /> : <GroupGreyIcon />}
          </div>
          <div className="wpref-button-content">
            <div className="wpref-button-title">Elige por mí</div>
          </div>
        </button>
      </div>
      <div className="hour-container-step4">
        <div className="hour-text-step4">Horario:</div>
        <input
          type="time"
          value={timeS}
          onChange={(e) => setTimeS(e.target.value)}
          className="hour-input-step4"
        />
        <div className="hour-auxtext-step4-a">-</div>
        <input
          type="time"
          value={timeF}
          onChange={(e) => setTimeF(e.target.value)}
          className="hour-input-step4"
        />
      </div>
    </div>
  );
}
export default Step4;
