import React from 'react'
import './intro.css';
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <div>
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introText'>I am, <span className='introName'>Neil</span> <br />Website Designer</span>
                <p className='introPara'>I am an aspiring and passionate web designer with experience<br/>  in creating visually appealing and user-friendly websites.</p>
                <Link><button className='btn'><img src={btnImg} alt='Hire me' className='btnImg'/>Hire me</button></Link>
            </div>
            <img src={bg} alt='Profile' className='bg'/>
        </section>
    </div>
  )
}

export default Intro;
