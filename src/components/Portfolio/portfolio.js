import React from "react";
import "./portfolio.css";
import Portfolio1 from '../../assets/whizzy1.jpg'
import Portfolio2 from '../../assets/bplo1.jpg'
import Portfolio3 from '../../assets/whizzy3.jpg'
import Earthquake from '../../assets/earthquake.jpg'
import GuessThePitch from '../../assets/guessthepitch.jpg'
import Whizzylogin from '../../assets/whizzylogin.png'
import Whizzyhome from '../../assets/whizzyhome.png'
import WhizzyUI from '../../assets/whizzyUI.jpg'
import WhizzyPic from '../../assets/WhizzyPic.jpg'
import WhizzyHi from '../../assets/WhizzyHi.jpg'
import BploLogin from '../../assets/BPLO1login.png'
import BploDashboard from '../../assets/BPLO2dashboard.png'
import BploSearchDoc from '../../assets/BPLO3searchdoc.png'
import BploUpload from '../../assets/BPLO4upload.png'
import BploManage from '../../assets/BPLO5manage.png'
import BploLogs from '../../assets/BPLO6;logs.png'
import BploEditProf from '../../assets/BPLO7editprof.png'
import Nse1 from '../../assets/NSE1.png'
import Nse2 from '../../assets/NSE2.png'
import Forticerti from '../../assets/fortinetcertificate.png'
import Goldstone from '../../assets/GoldstoneSeminar.png'
import LegalpersAI from '../../assets/ExploringthelegalperspectiveofAI.png'

const Portfolio = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");

    const details = document.querySelector("details");
    details.addEventListener("click", (e) => {
      if (details.hasAttribute("open")) { // since it's not closed yet, it's open!
        e.preventDefault(); // stop the default behavior, meaning - the hiding
        details.classList.add("closing"); // add a class which applies the animation in CSS
      }
    });

    // when the "close" animation is over
    details.addEventListener("animationend", (e) => {
      if (e.animationName === "close") {
        details.removeAttribute("open"); // close the element
        details.classList.remove("closing"); // remove the animation
      }
    });

  };
  return (
    <section id="portfolio">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        As a student these are the works I have taken part in and I consider
        these experiences very valuable.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
        <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
        <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
      </div>
      <button className="workBtn">More Soon</button>

      <h2 className="worksTitle">Works Done</h2>
      <span className="worksDesc">
        A quick view into the projects I have taken. <br />
        (Click Them to View our works)
      </span>

      <div className="portfolioBars">
        <div className="portfolioBar">
          <div className="portfolioBarText">
            <h3>Hey Whizzy: Development of an Interactive Voice-Assistive Kiosk for School Information Access</h3>
            <p>
              <div className="worksImgs">
                <img src={Whizzylogin} alt="Works1" className="worksImg2" role="link"
                  onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy-Admin-Website")} />
                <img src={Whizzyhome} alt="Works2" className="worksImg2" role="link"
                  onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy-Admin-Website")} />
                <img src={WhizzyUI} alt="Works5" className="worksImg2" role="link"
                  onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy")} />
                <img src={WhizzyPic} alt="Works5" className="worksImg2" role="link"
                  onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy")} />
                <img src={WhizzyHi} alt="Works5" className="worksImg2" role="link"
                  onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy")} />
              </div>
              <details>
                <summary><span id="off">More Details</span><span id="on">Close</span></summary>
                <p>
                  In this project, we have developed a Voice-Assistive Interactive Kiosk prototype that accesses a local
                  database with a web based entry creator to answer school related questions and a pre-trained language model
                  for other interactive actions.
                  <br /><br />
                  For this project, I have assisted in creating our initial interface for Whizzy
                  and integrated with our first tests with the language model. Also, I created the
                  design for our webpage's login page and overall design of the web application.
                </p>
              </details>
            </p>
          </div>
        </div>
      </div>

      <div className="portfolioBars">
        <div className="portfolioBar">
          <div className="portfolioBarText">
            <h3>Biñan City Hall - Business Permit and Licensing Office Document Management System</h3>
            <p>
              <div className="worksImgs">
                <img src={BploLogin} alt="Works1" className="worksImg2" role="link"
                  onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                <img src={BploDashboard} alt="Works2" className="worksImg2" role="link"
                  onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
              </div>
              <details>
                <summary><span id="off">More Images</span><span id="on">Less Images</span></summary>
                <div className="worksImgs">
                  <p className="worksImgs">
                    <img src={BploSearchDoc} alt="Works2" className="worksImg2" role="link"
                      onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                    <img src={BploUpload} alt="Works2" className="worksImg2" role="link"
                      onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                    <img src={BploManage} alt="Works2" className="worksImg2" role="link"
                      onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                    <img src={BploLogs} alt="Works2" className="worksImg2" role="link"
                      onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                    <img src={BploEditProf} alt="Works2" className="worksImg2" role="link"
                      onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")} />
                  </p>
                </div>
              </details>
              <details>
                <summary><span id="off">More Details</span><span id="on">Close</span></summary>
                <p>
                  In this project, we have developed a document management system where employees are able to view
                  documents that have been uploaded via our mobile application with sequential image taking to create
                  a long form pdf file or a manual upload via our web application as another method for documenting new
                  files received for the BPLO department. Authentication are also taking place with user levels being
                  implemented into the system. User levels greater than "User", or Admins/Super Admins are able to view
                  the admin section of the web page, where normal users would be unable to access or even see. This section
                  allows the admins to add users, edit user details or credentials and soft delete users which would then be
                  archived.
                  <br /><br />
                  For this project, I have created most of the admin management functions alongside with its modal buttons,
                  some automated fillout scripts for the upload functions alongside other additions such as helping integrate
                  the search bar's queries. The initial design of the web application is also created by me including the login
                  page.
                </p>
              </details>
            </p>
          </div>
        </div>
      </div>

      <div className="portfolioBars">
        <div className="portfolioBar">
          <div className="portfolioBarText">
            <h3>Mapúa Malayan Colleges Laguna: IoT Machine Problems</h3>
            <p>
              <div className="worksImgs">
                <img src={GuessThePitch} alt="Works6" className="worksImg2" role="link"
                  onClick={() => openInNewTab("https://github.com/Hir0su/Guess-the-Pitch")} />
                <img src={Earthquake} alt="Works3" className="worksImg2" role="link"
                  onClick={() => openInNewTab("https://github.com/Hir0su/Earthquake-Detection")} />
              </div>
              <details>
                <summary><span id="off">More Details</span><span id="on">Close</span></summary>
                <p>
                  Our <b>first project</b> is a product of our use with the arduino microcontroller. It is
                  a simple pitch guessing game where in we use a speaker module for the arduino, we use this
                  speaker to display a random set of sounds and with three buttons, the user has to memorize
                  and recognize the pitches made and replay the sounds as a result of said buttons.
                  We have received replies that the game was actually challenging and fun!
                  <br /><br />
                  For the <b>second project</b>, we have developed an earthquake detector using a MPU6050 sensor,
                  a module that is a complete 6-axis Motion Tracking Device. It combines 3-axis Gyroscope,
                  3-axis Accelerometer and Digital Motion Processor. Using these along with an arduino uno
                  microcontroller, we were able to receive alarm signals when axis changes and vibrations
                  are detected, which in turn is recorded into our database and displayed in a simple php
                  website that we made as a visual record display.
                </p>
              </details>
            </p>
          </div>
        </div>
      </div>

      <h2 className="worksTitle">My Certificates</h2>
      <span className="worksDesc">
        Certificates I have earned.
      </span>
      <div className="worksImgs">
        <img src={Nse1} alt="Certi1" className="worksImg" />
        <img src={Nse2} alt="Certi2" className="worksImg" />
        <img src={Forticerti} alt="Certi3" className="worksImg" />
      </div>

      <h2 className="worksTitle">Seminars Attended</h2>
      <span className="worksDesc">
        These are the Seminars I have attended and my thoughts and reflections in paper.<br />
        (Click Them for full View)
      </span>
      <div className="worksImgs">
        <img src={Goldstone} alt="Seminar1" className="worksImg" role="link"
          onClick={() => openInNewTab("https://drive.google.com/file/d/14gMnnKU4hCEOT1PFr15Bm9OZH4dkDudv/view?usp=sharing")} />
        <img src={LegalpersAI} alt="Seminar2" className="worksImg" role="link"
          onClick={() => openInNewTab("https://drive.google.com/file/d/1JPYHedJAKOLDX1z0NKFvaOFq8ANvC9F5/view?usp=sharing")} />
      </div>
    </section>
  );
};

export default Portfolio;
