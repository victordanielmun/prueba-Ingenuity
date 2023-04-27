import React from "react";

import "./index.scss";

export default function JoinUs() {
  return (
    <div className="background-joinUs">
      <div className="joinUs">
        <div className="joinUs-body">
          <div className="joinUs-content">
            <div className="the-crew-content-text">
              <p className="title">
                Join <span>Us.</span>
              </p>
              <p className="text-content">
                In the sea of life, there is nothing to fear if you have God as
                your captain. Join our crew!
              </p>
              <br />
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="Full Name"
                    // required
                  />
                  <div className="error-msg">
                  Please enter your full name
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    //required
                  />
                  <div className="error-msg">
                  Please enter a valid email
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Cell Phone Number"
                    //required
                  />
                  <div className="error-msg">
                  Please enter a valid phone number
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    //required
                  ></textarea>
                  <div className="error-msg">Please enter a message</div>
                </div>

                <button type="submit">SENT</button>
              </form>
            </div>
          </div>
          <div className="joinUs-content-img">
            <img src="/assets/joinus/joinus.png" alt="joinus" />
          </div>
        </div>
      </div>
    </div>
  );
}
