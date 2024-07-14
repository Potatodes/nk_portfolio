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
import Bplosys from '../../assets/Bplosys.png'
import Nse1 from '../../assets/NSE1.png'
import Nse2 from '../../assets/NSE2.png'
import Forticerti from '../../assets/fortinetcertificate.png'
import Goldstone from '../../assets/GoldstoneSeminar.png'
import LegalpersAI from '../../assets/ExploringthelegalperspectiveofAI.png'

const Portfolio = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
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
      <div className="worksImgs">
        <img src={Whizzylogin} alt="Works1" className="worksImg2" role="link"
          onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy-Admin-Website")} />
        <img src={Whizzyhome} alt="Works2" className="worksImg2" role="link"
          onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy-Admin-Website")}/>
        <img src={Earthquake} alt="Works3" className="worksImg2" role="link"
          onClick={() => openInNewTab("https://github.com/Hir0su/Earthquake-Detection")}/>
        <img src={Bplosys} alt="Works4" className="worksImg2" role="link"
          onClick={() => openInNewTab("https://github.com/johnarthurpanti/BPLO_DMS")}/>
        <img src={WhizzyUI} alt="Works5" className="worksImg2" role="link"
          onClick={() => openInNewTab("https://github.com/Hir0su/Hey-Whizzy")}/>
        <img src={GuessThePitch} alt="Works6" className="worksImg2" role="link"
          onClick={() => openInNewTab("https://github.com/Hir0su/Guess-the-Pitch")}/>
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
          onClick={() => openInNewTab("https://drive.google.com/file/d/14gMnnKU4hCEOT1PFr15Bm9OZH4dkDudv/view?usp=sharing")}/>
        <img src={LegalpersAI} alt="Seminar2" className="worksImg" role="link"
          onClick={() => openInNewTab("https://drive.google.com/file/d/1JPYHedJAKOLDX1z0NKFvaOFq8ANvC9F5/view?usp=sharing")}/>
      </div>
    </section>
  );
};

export default Portfolio;
