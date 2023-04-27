import "./bootstrap";

import React from "react";
import ReactDOM from "react-dom/client";

// rutas
/* import { Routes } from 'routes'; */

// componentes
import TheCrow from "./components/the-crew/the-crew.component";
import Events from "./components/events/events.component";
import WhatsNew from "./components/whats-new/whats-new.component";
import Navbar from "./layout/nav/nav.component";
import Banner from "./layout/banner/banner.component";
import Memories from "./components/memories/memories.component";
import Music from "./components/music/music.component";
import JoinUs from "./components/join-us/joinus.component";

// configuracion de la aplicación
const rootElement = document.querySelector("#root");
if (!rootElement) throw new Error("No fue posible renderizar la App.");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* <Routes /> */}

    {/* Navbar - menu*/}
    <Navbar />

    <div className="container">
      {/* Banner - imagenes principales */}
      <Banner />

      {/* Contenido para Events */}
      <Events />

      {/* Contenido para TheCrow */}
      <TheCrow />

      {/* Contenido para WhatsNew */}
      <WhatsNew />

      {/* Contenido para memories */}
      <Memories />

      {/* Contenido para music */}
      <Music />

      {/* Contenido para joinUs */}
      <JoinUs />
      
      {/* Contenido para Footer */}
      {/* <Footer /> */}


    </div>
  </React.StrictMode>
);
