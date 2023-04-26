import './bootstrap'

import React from 'react';
import ReactDOM from 'react-dom/client';

// rutas
/* import { Routes } from 'routes'; */

// componentes 
import TheCrow from './components/the-crew/the-crew.component'
import Events from './components/events/events.component'
import Navbar from './layout/nav/nav.component'
import Banner from './layout/banner/banner.component'
import Counter from './components/Counter'

// configuracion de la aplicación
const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('No fue posible renderizar la App.');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>

    {/* <Routes /> */}

    {/* Navbar - menu*/}
    <Navbar />

    <div className="container">
      
      {/* Banner - imagenes principales */}
      <Banner />

      {/* Contenido para TheCrow */}
      <TheCrow />
      
      {/* Contenido para Events */}
      <Events />

      {/* ELIMINAR SOLO SON DE PRUEBAS */}
      <br />
      <br />
      <Counter />

    </div>

  </React.StrictMode>
);