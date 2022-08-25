import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
      <div className="HeaderSocials">
        <a target="_blank" href="https://www.linkedin.com/in/adarsh-alone-551744222" ><FaLinkedin /></a>
        <a target="_blank" href="https://github.com/AadarshCodes" ><BsGithub /></a>
        <a target="_blank" href="https://www.facebook.com/adarsh.alonee.5/" ><BsFacebook /></a>
      </div>

  )
}

export default HeaderSocials