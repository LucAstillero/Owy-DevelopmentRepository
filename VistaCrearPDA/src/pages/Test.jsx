import React from "react";
import FloatingChatbox from "../elementos/Chatbox";
import { useLocation } from "react-router-dom";
import Pda from "../acciones/pda";

function Test() {
  const { state } = useLocation();
  const lowered = state?.lowered ?? false;
  const textoPrompt = state?.textoPrompt ?? "Texto no disponible";

  return (
    <div className="main-container-test">
      <Pda className="pda" />

      <div className="chatbox-wrapper">
        <FloatingChatbox
          lowered={lowered}
          textoPrompt={textoPrompt}
          onRender={() => {}}
        />
      </div>
    </div>
  );
}

export default Test;
