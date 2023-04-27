import React from "react";

import "./index.scss";

export default function Memories() {
  const fotos = [
    { id: 1, src: "/assets/memories/memories1.png", width: 2, height: 2 },
    { id: 2, src: "/assets/memories/memories2.png", width: 1, height: 2 },
    { id: 3, src: "/assets/memories/memories3.png", width: 1, height: 1 },
    { id: 4, src: "/assets/memories/memories4.png", width: 1, height: 1 },
    { id: 5, src: "/assets/memories/memories5.png", width: 1, height: 1 },
    { id: 6, src: "/assets/memories/memories6.png", width: 1, height: 1 },
  ];

  return (
    <div className="memories">
      <img src="/assets/events/Grupo 54.svg" alt="Logo Newman club" />
      <div className="title">
        <p>Memories</p>
      </div>
      
      <div class="grid-container">
  {/* <div class="grid-item item1"></div> */}

</div>

      <button className="button-more-events">MORE MEMORIES</button>
    </div>
  );
}
