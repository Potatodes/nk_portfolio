import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';
import facebookIcon from "../../assets/facebook-icon.png";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/githublogo.png";

const Intro = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div>
      <section id='intro'>
        <div className='introContent'>
          <span className='hello'>Hello,</span>
          <span className='introText'>I am <span className='introName'>Neil Keinsley</span>, an <br />Aspiring Website Designer</span>
          <p className='introPara'>I am an aspiring and passionate web designer<br />  A student of Mapúa Malayan Colleges Laguna</p>
          <Link><button className='btn' role='link' onClick={() => openInNewTab("https://drive.google.com/file/d/1CatFUN7dF4cpNzEhJO1WXzZ8CiblMdEm/view?usp=sharing")}><img src={btnImg} alt='myCv' className='btnImg' />My CV</button></Link>
          <div className="links">
            <img src={facebookIcon} alt="Facebook" className="link" role="link"
              onClick={() => openInNewTab("https://www.facebook.com/lieNKeinsley/")} />
            <img src={linkedinIcon} alt="Linkedin" className="link" role="link"
              onClick={() => openInNewTab("https://www.linkedin.com/in/neil-keinsley-guingcangco-389281308/")} />
            <img src={githubIcon} alt="Linkedin" className="link" role="link"
              onClick={() => openInNewTab("https://github.com/Potatodes")} />
          </div>
        </div>
        <img src={bg} alt='MyPicture' className='bg' />
      </section>
    </div>
  )
}

export default Intro;
