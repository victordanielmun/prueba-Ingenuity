import React from "react";

import "./index.scss";

export default function Events() {
  const events = [
    { event: "EVENT 1", source: "/assets/events/event1.jpg", isActive: true },
    { event: "EVENT 2", source: "/assets/events/event2.jpg", isActive: true },
    { event: "EVENT 3", source: "/assets/events/event3.jpg", isActive: true },
    { event: "EVENT 4", source: "/assets/events/event4.jpg", isActive: true },
  ];

  return (
    <div className="events">
      <img src="/assets/events/Grupo 54.svg" alt="Logo Newman club" />
      <div className="title"><p>Events</p></div>
      <div className="menu-events">
      {events.map((item, index) => (
        <div className="event-menu-items-item" key={index}>
          <img className="logo-events" src={item.source} alt={item.event} />
          <div className="item-event-title">
          <p>{item.event}</p>
          </div>
        </div>
      ))}
      </div>
      <button className="button-more-events">MORE EVENTS</button>
      <span>Let's have fun, join us in our events. Find out more here.</span>
      <div className="background-image"/>
    </div>
  );
}
