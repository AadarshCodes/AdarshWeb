import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer>
        <a href="#header" className="footer-logo">Adarsh Alone</a>

        <ul className="links">
          <li><a href="#header">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testemonials">Testemonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials">
          <a href="https://www.facebook.com/adarsh.alonee.5/"><BsFacebook /></a>
          <a href="https://www.instagram.com/aloneadarsha/"><FaInstagramSquare /></a>
          <a href="https://twitter.com"><BsTwitter /></a>
        </div>
        <div className="footer-copyright">
          <small>&copy; Adarsh alone. All right reserved.</small>
        </div>

        
      </footer>
      
      </>
    
  )
}

export default Footer