import React from 'react';

import './index.scss'

export default function Video() {

  return (
    <div className="video">
      <video autoplay loop>
      <source src="../../../../public/assets/video/Final2.mp4" type="video/mp4">

      Your browser don´t suport this element
    </video>
    <img src="./assets/Grupo 971.svg" alt="scroll" class="scroll-video"/>


    </div>
  );
}