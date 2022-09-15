
import './Portfolio.css'
import Youtube from '../../assets/youtube.jpg'
import Tesla from '../../assets/tesla.webp'
import Portfolio1 from '../../assets/portfolio.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h4>My Recent Work</h4>
      <h1>Portfolio</h1>
      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Portfolio1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https://github.com/AadarshCodes/AdarshWeb" className='btn' target="_blank">Github</a>
            <a href="https//aadarshcodes.github.io/AdarshWeb/" className='btn btn-primary'target="_blank">Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Tesla} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https://github.com/AadarshCodes/Tesla-Clone" className='btn' target="_blank">Github</a>
            <a href="https://teslaclonebyadarsh.netlify.app" className='btn btn-primary' target="_blank">Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Youtube} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https://github.com/AadarshCodes/VideoTube-app" className='btn'  target="_blank">Github</a>
            <a href="https//github.com" className='btn btn-primary' target="_blank">Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Youtube} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https//github.com" className='btn'  target="_blank">Github</a>
            <a href="https//github.com" className='btn btn-primary' target="_blank">Github</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Youtube} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https//github.com" className='btn' target="_blank">Github</a>
            <a href="https//github.com" className='btn btn-primary'target="_blank">Github</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={Youtube} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio-item-CTA">
            <a href="https//github.com" className='btn' target="_blank">Github</a>
            <a href="https//github.com" className='btn btn-primary' target="_blank">Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio