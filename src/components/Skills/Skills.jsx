import React, { useState } from "react";
import "./Skill.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

function Skills() {
  const [skillsList, setSkillsList] = useState(true);
  return (
    <section className="experienceee" id="Experience">
      <div className="experience-title">
        <span className="experience-title1">
          My <span className="services-about-primary">Experiences</span>
        </span>
        <a>Skills</a>
      </div>

      <div className="experience__container">
        <Fade bottom>
          <motion.div
            className="experience__frontend"
            whileHover={{ scale: 1.15 }}
          >
            <h3>Frontend Developement</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div className="experiences">
                  <a>HTML</a>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div className="experiences">
                  <a>CSS</a>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div className="experiences">
                  <a>Javascript</a>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div className="experiences">
                  <a>React</a>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div className="experiences">
                  <a>Angular</a>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </motion.div>
        </Fade>
        <Fade top>
          <motion.div
            className="experience__frontend"
            whileHover={{ scale: 1.15 }}
          >
            <h3>Designer Skills</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div className="experiences">
                  <a>Photoshop</a>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div className="experiences">
                  <a>Figma</a>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div className="experiences">
                  <a>Adobe</a>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsFillPatchCheckFill />
                <div className="experiences">
                  <a>After Effects</a>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </motion.div>
        </Fade>
      </div>
    </section>
  );
}

export default Skills;
