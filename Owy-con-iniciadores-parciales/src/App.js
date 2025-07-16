import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navibar from "./navibar";
import Perfil from "./pages/Perfil";
import Datos from "./pages/Datos";
import Chat from "./pages/Chat";
import Notificaciones from "./pages/Notificaciones";
import Iniciador from "./elementos/iniciador";
import datosIniciadores from "./data/iniciadores-data";

export default function Main() {
  return (
    <div
      className="main-container"
      style={{ marginLeft: "220px", padding: "20px" }}
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

      <div className="contenedor-iniciadores">
        <Iniciador {...datosIniciadores.iniciador1} />

        <Iniciador {...datosIniciadores.iniciador2} />

        <Iniciador {...datosIniciadores.iniciador3} />
      </div>

      <div className="section-4">
        <div className="wrapper-2">
          <span className="text-9">¡Escríbelo!</span>
          <div className="pic-3" />
          <div className="pic-4" />
          <div className="pic-5" />
          <div className="img-5" />
        </div>
        <div className="pic-6" />
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
