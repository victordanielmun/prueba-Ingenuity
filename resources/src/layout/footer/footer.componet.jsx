import React from "react";

import "./index.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footer-middle">
        <div className="footer-middle-address">
          <img src="/assets/footer/logo.svg" alt="Logo Newman club" />
          <p>Follow us on our social networks and don't miss our latest news and events.</p>
        </div>
        <div className="footer-middle-address-social">
        <div className="social-address">
          <img src="/assets/footer/terlefono.svg" alt="" />
          <p>+57 (322) 374 6739</p>
          </div>
        <div className="social-address">
          <img src="/assets/footer/correo.svg" alt="" />
          <p>servicio@lurdes.co</p>
          </div>
      <div className="social-icons-container">
      <div className="social-icons">
          <img src="/assets/socials/instagram.png" alt="logo instagram" />
          </div>
          <div className="social-icons">
          <img src="/assets/socials/facebook.png" alt="logo facebook" />
        </div>
      </div>
        </div>
        <div className="footer-middle-newsletter">
        <p>SUBSCRIBE TO OUR NEWSLETTER!</p>
        <input type="text" placeholder="Your Email" />
        <button>SEND</button>
        </div>
        
      </div>
      <div className="footer-last">
        <p className="text-last">
          Terms & Conditions | Privacy Policy <br /> © Copyright 2020 - 2021
          Ingenuity & Solutions LLC All Rights Reserved.
        </p>
      </div>
      
    </footer>
  );
}
