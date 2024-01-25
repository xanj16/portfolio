import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/gwapa.jpg";

const Intro = () => {
  return (
    <section id="about">
      <h5>CONOSCIMI</h5>
      <h2>Su Di Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>17 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2 Completed Projects</small>
            </article>
          </div>
          <p>
            Able Full-stack Cutie with over 17 years of expertise of Charms and Beauty development.
            <br />
            My goal is to deliver confidence, and I adhere to the following principles of my trait:
            <br />
            - I focus on providing courage and belief in one self.
            <br />
            - I believe that spreading positivity and encouragement will help women.
          </p>
          <a href="#contact" className="btn btn-primary">
            HABLEMOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
