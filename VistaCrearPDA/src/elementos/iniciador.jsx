import React from "react";
import { useNavigate } from "react-router-dom";
import orangeSquare from "../assets/images/orange.svg";

function Iniciador({ prompt }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Test", {
      state: {
        lowered: true,
        textoPrompt: prompt,
      },
    });
  };

  return (
    <button onClick={handleClick} className="iniciador">
      <img src={orangeSquare} className="img-iniciador" />
      <span className="text-iniciador">{prompt}</span>
    </button>
  );
}

export default Iniciador;
