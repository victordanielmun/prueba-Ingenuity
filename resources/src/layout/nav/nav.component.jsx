import React, { useState } from 'react';

import './index.scss'

export default function NavBar() {

  const [menu, setMenu] = useState([
    {
      title: "HOME",
      slug: "#home",
      isActive: true
    },
    {
      title: "THE CREW",
      slug: "#the-crew",
      isActive: false
    },
    {
      title: "EVENTS",
      slug: "#events",
      isActive: false
    },
    {
      title: "WHAT'S NEW",
      slug: "#what's-new",
      isActive: false
    },
    {
      title: <span>VIRTUAL <br />OFFICE</span>,
      slug: "#virtual-office",
      isActive: false
    },
    {
      title: "CONTACT",
      slug: "#contact",
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
              <a src={item.slug}>{item.title}</a>
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