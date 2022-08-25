import{useState} from 'react'
import './Header.css'
import CTA from './CTA'
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