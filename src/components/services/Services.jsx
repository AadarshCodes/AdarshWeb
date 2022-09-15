import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h4>What i offer</h4>
      <h1>Services</h1>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>UI Design</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Design a beautiful UI.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Build a complex UI. </p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Basics to advance type UI build.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>

        {/* //finish ui Design */}

        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Build a fronted websites.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Build a backend websites.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Fullstack websites also we build.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Best fullstack websites we build.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Frontend websites are our specality.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
        {/* finish web development */}

        <article className="service">
          <div className="service-head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className='service-list-icons'/>
              <p>We crete most unique content.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Every type of content we create.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Content for your requirment we create.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
              <BiCheck className='service-list-icons'/>
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services