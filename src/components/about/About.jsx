import React from 'react'
import './About.css'
import myImage from '../../assets/myImage.jpg'
import{RiServiceFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <about>
        <center><h4>Get me know</h4></center>
        <center><h1>About me</h1></center>
        <div className="container about-container">
          <div className="about-me">
            <div className="about-me-image">
              <img src={myImage} alt="about-Image" />
            </div>
          </div>
          <div className="about-content">
            <div className="about-cards">
              <article className='about-card'>
                <RiServiceFill className='about-icons'/>
                <h5>Experience</h5>
                <small>6months +</small>
              </article>

              <article className='about-card'>
                <RiServiceFill className='about-icons'/>
                <h5>Clients</h5>
                <small>1+</small>
              </article>

              <article className='about-card'>
                <RiServiceFill className='about-icons'/>
                <h5>Project</h5>
                <small>10+ done</small>
              </article>
            </div>
            <p>My name <a style={{color:"lightPink"}}> Adarsh N. Alone</a> i complate my degree in Bachlor of vocational the field in (Software Development).i am intern in V.K. Technology and Services and i work professionally as a Fullstack Developer.</p>

            <a href="#contact" className='btn btn-primary'>Contact</a>
          </div>
        </div>
      </about>
    </section>
  )
}

export default About