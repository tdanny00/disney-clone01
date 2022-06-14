import React from "react";
import "./Services.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import me from "../../img/me.jpg";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

function Services() {
  return (
    <section className="services-container" id="About">
      <div className="services-parent">
        <Fade bottom>
          <div className="services-left">
            <div className="services-title">
              <span className="services-title1">
                About <span className="services-about-primary">Me</span>
              </span>
              <a>My Introduction</a>
            </div>
            <div>
              <div className="service">
                <article className="service-me-details">
                  <a>
                    I am Dániel Tölgyesi, a third-year Computer science engineer
                    student from Hungary. <br /> I love challenges and I adapt
                    well for the new situations. I am open for learning and I
                    like to obtain new knowledge about everything. I have an
                    Advanced State Recognized English (C1) complex language
                    exam. In My high school years I went into a billingual class
                    where I graduated from mathematics and history in English.{" "}
                    <br />I would characterize myself as a great team member and
                    I can compete things well in solo. I have a vivid and
                    precise working ability too.
                  </a>
                </article>
              </div>
            </div>
          </div>
        </Fade>

        <div className="services-right">
          <motion.div></motion.div>
          <div className="services-box">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Fade left>
                <article className="service-details">
                  <VscFolderLibrary className="about__icon" />
                  <h3>Experience</h3>
                  <small>4+ Years Working</small>
                </article>
              </Fade>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Fade right>
                <article className="service-details">
                  <FaAward className="about__icon" />
                  <h3>Experience</h3>
                  <small>1+ Years Working</small>
                </article>
              </Fade>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
