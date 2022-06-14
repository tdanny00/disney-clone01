import React from "react";
import Typical from "react-typical";
import "./Intro.css";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

function Intro() {
  return (
    <div className="i-container" id="Home">
      <div className="profile-parent">
        <Fade bottom>
          {" "}
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, I'm <span className="highlighted-text">Daniel</span>
            </span>
          </div>
        </Fade>

        <LightSpeed left>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </LightSpeed>
        <Fade bottom>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend 💻",
                    2000,
                    "React 🔺",
                    2000,
                    "Angular💀",
                    2000,
                    "Photoshop ✨",
                    2000,
                    "After Effects 🔥",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                a third-year computer science engineer student at Széchenyi
                István University.
              </span>
            </span>
            <div className="profile-options">
              <button className="button button-contact">
                <a className="contact_btn" href="#Contact">
                  Contact
                </a>
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Intro;
