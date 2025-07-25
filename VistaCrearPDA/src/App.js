import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Perfil from "./pages/Perfil";
import Datos from "./pages/Datos";
import Chat from "./pages/Chat";
import Test from "./pages/Test";
import Notificaciones from "./pages/Notificaciones";
import Navibar from "./navibar";

export default function App() {
  return (
    <Router>
      <Navibar className="navibar" />
      <Routes>
        <Route path="/" element={<Navigate to="/chat" />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/datos" element={<Datos />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </Router>
  );
}
