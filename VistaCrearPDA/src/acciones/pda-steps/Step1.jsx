/*STEP1 - CALENDAR STEP*/
import React, { useRef, useState } from "react";
import CalendarComponent from "../../elementos/calendar";

function Step1() {
  const [time, setTime] = useState("");

  return (
    <div className="step1">
      <CalendarComponent />
      <div className="hour-container">
        <div className="hour-text">Hora:</div>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="hour-input"
        />
      </div>
    </div>
  );
}
export default Step1;
