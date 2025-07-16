import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";
import Navibar from "./navibar";
import Perfil from "./pages/Perfil";
import Datos from "./pages/Datos";
import Chat from "./pages/Chat";
import Notificaciones from "./pages/Notificaciones";
import Iniciador from "./elementos/iniciador";
import datosIniciadores from "./data/iniciadores-data";

export default function Main() {
  const [textoPrompt, setText] = useState("¡Escríbelo!");

  const iniciadorClick = (prompt) => {
    setText(prompt);
  };

  return (
    <div
      className="main-container"
      style={{ marginLeft: "200px", padding: "20px" }}
    >
      <Router>
        <Navibar />
        <Routes>
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/datos" element={<Datos />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notificaciones" element={<Notificaciones />} />
        </Routes>
      </Router>
      <div className="pic" />

      <div className="group">
        <div className="group-2" />
        <span className="text-2">Hola, usuario</span>
      </div>

      <span className="text-3">¿En qué puedo ayudarte?</span>
      <div className="img" />

      <div className="contenedor-principal">
        <div className="wrapper-contenedor-iniciadores">
          <div className="contenedor-iniciadores">
            <Iniciador
              {...datosIniciadores.iniciador1}
              onClick={() => iniciadorClick(datosIniciadores.iniciador1.prompt)}
            />

            <Iniciador
              {...datosIniciadores.iniciador2}
              onClick={() => iniciadorClick(datosIniciadores.iniciador2.prompt)}
            />

            <Iniciador
              {...datosIniciadores.iniciador3}
              onClick={() => iniciadorClick(datosIniciadores.iniciador3.prompt)}
            />
            <Iniciador
              {...datosIniciadores.iniciador4}
              onClick={() => iniciadorClick(datosIniciadores.iniciador4.prompt)}
            />
          </div>
        </div>

        <div className="section-4">
          <div className="wrapper-2">
            <span className="textoPrompt">{textoPrompt}</span>
          </div>
        </div>
      </div>

      <span className="text-a">
        *Owy y ChatGPT pueden cometer errores, revisa siempre la información.
      </span>

      <div className="img-6" />

      <div className="section-5">
        <span className="text-b">?</span>
        <div className="img-7" />
      </div>
    </div>
  );
}
