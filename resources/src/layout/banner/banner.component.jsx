import React from "react";

import "./index.scss";

export default function Banner() {

  return (
    <div className="banner">
      <video autoPlay loop muted>
        <source src="/assets/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
