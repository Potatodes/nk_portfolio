import React from "react";
import "./portfolio.css";
import Portfolio1 from '../../assets/whizzy1.jpg'
import Portfolio2 from '../../assets/whizzy2.jpg'
import Portfolio3 from '../../assets/whizzy3.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        As a student these are the works I have taken part in and I consider
        these experiences, very valuable!
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
        <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
        <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
      </div>
    </section>
  );
};

export default Portfolio;
