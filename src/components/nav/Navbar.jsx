import React from 'react'
import './Navbar.css'
import{AiFillHome} from 'react-icons/ai'
import{FaUser} from 'react-icons/fa'
import{BsFillBookmarkStarFill} from 'react-icons/bs'
import{RiServiceFill} from 'react-icons/ri'
import{IoMdContact} from 'react-icons/io'
import { useState } from 'react'

const Navbar = () => {
  const {activeNav, setactiveNav}= useState('#');
  return (
   <nav>
    <a href="#"  onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
    <a href="#about" onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
    <a href="#experience" onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookmarkStarFill/></a>
    <a href="#services" onClick={() => setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
    <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact/></a>
   </nav>
  )
}

export default Navbar