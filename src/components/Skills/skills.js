import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import Follower from "../../assets/follower.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">My Skills and Traits</span>
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
            <p>
              As an aspiring web designer, I have a keen eye for aesthetics and
              a deep understanding of user-centered design principles, enabling
              me to create visually appealing and intuitive interfaces that
              enhance user experience.
            </p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Disign</h2>
            <p>
              As an aspiring web designer, I excel at creating visually
              appealing, responsive, and user-friendly websites by combining my
              knowledge of modern design principles, HTML, CSS, and JavaScript.
            </p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Follower} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>A Good Follower</h2>
            <p>
              If guided, I'm always eager to listen and learn, committed to
              following directions and contributing effectively to the team's
              ultimate success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
