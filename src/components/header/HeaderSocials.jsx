import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
      <div className="HeaderSocials">
        <a href="https://linkedin.com" ><FaLinkedin /></a>
        <a href="https://github.com" ><BsGithub /></a>
        <a href="https://facebook.com" ><BsFacebook /></a>
      </div>

  )
}

export default HeaderSocials