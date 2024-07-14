import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">
          I am experienced and passionate in creating visually appealing and
          user-friendly websites. I have a strong understanding of design and a
          keen eye for detail. I am knowledgeable in HTML, CSS and JavaScript.
        </span>

        <div className="skillBars">
          <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>UI/UX Design</h2>
              <p>Demo Text Testing</p>
            </div>
          </div>
          </div>
          <div className="skillBars">
            <div className="skillBar">
              <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Web Disign</h2>
                <p>Demo Text Testing</p>
              </div>
            </div>
          </div>
          <div className="skillBars">
            <div className="skillBar">
              <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
              <div className="skillBarText">
                <h2>Application Design</h2>
                <p>Demo Text Testing</p>
              </div>
            </div>
          </div>
      </section>
  );
};

export default Skills;
