import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

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
                <p className='introPara'>I am an aspiring and passionate web designer with experience<br/>  in creating visually appealing and user-friendly websites.</p>
                <Link><button className='btn' role='link' onClick={() => openInNewTab("https://drive.google.com/file/d/1VrZTEMyheDwzwpqijRvYJlrkLccT15bG/view?usp=sharing")}><img src={btnImg} alt='myCv' className='btnImg'/>My CV</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg'/>
        </section>
    </div>
  )
}

export default Intro;
