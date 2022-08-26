import{useState} from 'react'
import './Header.css'
import CTA from './CTA'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import myImage from '../../assets/myImage.jpg'
import HeaderSocials from './HeaderSocials'
import {GoThreeBars} from 'react-icons/go';
import {AiOutlineClose} from 'react-icons/ai';

const Header = () => {
  const [openHamb, setOpenHamb]= useState(false);
  return (
    <>
    <div onClick={() => setOpenHamb(!openHamb)}  className="barsIcon"><GoThreeBars/>
    </div>
      { openHamb && <div  className="hamb">
        <div onClick={() => setOpenHamb(!openHamb)} className="closeHamb"><AiOutlineClose/>
        </div>
        <li className="hamb-list">
          <a className="hambTag" href="#header">Home</a>
          </li>
        <li className="hamb-list">
          <a className="hambTag" href="#about">About</a>
          </li>
        <li className="hamb-list">
          <a className="hambTag" href="#experience">Experience</a>
          </li>
        <li className="hamb-list">
          <a className="hambTag" href="#services">Services</a>
          </li>
        <li className="hamb-list">
          <a className="hambTag" href="#portfolio">Portfolio</a>
          </li>
        <li className="hamb-list">
          <a className="hambTag" href="#contact">Contact</a>
          </li>
          <div className="hambSocials">
            
          <a target="_blank" href="https://www.linkedin.com/in/adarsh-alone-551744222" ><FaLinkedin /></a>
        <a target="_blank" href="https://github.com/AadarshCodes" ><BsGithub /></a>
        <a target="_blank" href="https://www.facebook.com/adarsh.alonee.5/" ><BsFacebook /></a>
          </div>
          <div className="hambName">
            AdarshAlone.in
          </div>
      </div>}
      <header>
        <section id='header' className="container header-container">
          <h4>Hello I'm</h4>
          <h1>Adarsh Alone</h1>
          <h4>Fullstack Developer</h4>
          <CTA />
          <HeaderSocials />

          <div className="myImage">
            <img src={myImage} alt="Adarsh" />
          </div>
          <a className='scroll-down' href="#contact">Scroll Down</a>
        </section>
      </header>
    </>
  )
}

export default Header