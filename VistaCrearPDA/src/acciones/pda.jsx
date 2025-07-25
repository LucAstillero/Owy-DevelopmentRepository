import React, { useState } from "react";
import Step1 from "./pda-steps/Step1";
import Step2 from "./pda-steps/Step2";
import Step3 from "./pda-steps/Step3";
import Step4 from "./pda-steps/Step4";

const Pda = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { title: "¿Cuál es la fecha y hora de entrega?", component: <Step1 /> },
    {
      title: "¿Qué necesitas preparar y de qué contenido dispones?",
      component: <Step2 />,
    },
    {
      title: "Para calcular tu carga de trabajo, dime también:",
      component: <Step3 />,
    },
    {
      title: "¿Tienes alguna preferencia sobre cómo trabajar?",
      component: <Step4 />,
    },
  ];

  return (
    <div className="relative">
      <div className="card-banner">
        <div className="card-title-number">{step + 1}.</div>
        <div className="card-title">{steps[step].title}</div>
        <div className="card-number">{step + 1}/4</div>
      </div>
      <div className="card">{steps[step].component}</div>

      <div className="pda-stepping-buttons">
        {step > 0 && (
          <button
            className="pda-atras-button"
            onClick={() => setStep((s) => s - 1)}
          >
            Atrás
          </button>
        )}
        <button
          className="pda-siguiente-button"
          disabled={step === steps.length - 1}
          onClick={() => setStep((s) => s + 1)}
        >
          {step === steps.length - 1 ? "Generar" : "Siguiente"}
        </button>
      </div>
    </div>
  );
};
export default Pda;
