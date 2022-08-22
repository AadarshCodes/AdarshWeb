
import './Portfolio.css'
import PImage from '../../assets/logo.wipro.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h1>Portfolio</h1>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={PImage} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https//github.com" className='btn'>Github</a>
            <a href="https//github.com" className='btn btn-primary'>Github</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={PImage} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https//github.com" className='btn'>Github</a>
            <a href="https//github.com" className='btn btn-primary'>Github</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={PImage} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https//github.com" className='btn'>Github</a>
            <a href="https//github.com" className='btn btn-primary'>Github</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={PImage} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https//github.com" className='btn'>Github</a>
            <a href="https//github.com" className='btn btn-primary'>Github</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={PImage} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https//github.com" className='btn'>Github</a>
            <a href="https//github.com" className='btn btn-primary'>Github</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={PImage} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https//github.com" className='btn'>Github</a>
            <a href="https//github.com" className='btn btn-primary'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio