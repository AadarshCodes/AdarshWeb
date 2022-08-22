import React from 'react'
import './Header.css'
import CTA from './CTA'
import myImage from '../../assets/myImage.jpg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <>
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