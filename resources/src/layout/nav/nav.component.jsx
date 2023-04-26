import React, { useState } from 'react';

import './index.scss'

export default function NavBar() {

  const [menu, setMenu] = useState([
    {
      title: "HOME",
      isActive: true
    },
    {
      title: "THE CREW",
      isActive: false
    },
    {
      title: "EVENTS",
      isActive: false
    },
    {
      title: "WHAT'S NEW",
      isActive: false
    },
    {
      title: <span>VIRTUAL <br />OFFICE</span>,
      isActive: false
    },
    {
      title: "CONTACT",
      isActive: false
    }
  ]);

  return (
    <nav className="navbar">

      {/* Logo */}
      <img src="/assets/logo.svg" alt="logo" />

      {/* Menu items */}
      <div className="nav-menu-items">
        {
          menu.map((item, index) => (
            <div className="nav-menu-items-item" key={index}>
              <span>{item.title}</span>
            </div>
          ))
        }
      </div>

      {/* Links botones */}
      <div className="nav-menu-links">
        <button>MARIA REINA PARISH</button>
        <div className="nav-menu-links-content-img">
          <img src="/assets/socials/instagram.png" alt="instagram" />
        </div>
        <div className="nav-menu-links-content-img">
          <img src="/assets/socials/facebook.png" alt="facebook" />
        </div>
      </div>

    </nav>
  );
}