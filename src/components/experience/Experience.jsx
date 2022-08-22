import React from 'react'
import './Experience.css'

const experience = () => {
  return (
    <section id='experience'>
      <h4>What Skills I Have</h4>
      <h1>My Experience</h1>
      <div className="container experience-container">
        <div className="experience-frontend">
           <h3>Frontend Development</h3>
           <div className="experience-containted">
            <article className='experience-details'>
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
            <article className='experience-details'>
              <div>
              <h4>CSS</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience-details'>
               <div>
               <h4>JavaScriptL</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
            <article className='experience-details'>
               <div>
               <h4>Bootstrap</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
            <article className='experience-details'>
               <div>
               <h4>tailwind</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
            <article className='experience-details'>
               <div>
               <h4>React.js</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
            <article className='experience-details'>
               <div>
               <h4>Next.js</h4>
               <small className='text-light'>Intermediate</small>
               </div>
            </article>
           </div>
        </div>
        <div className="experience-backend">
             <h3>Backend Development</h3>
             <div className="experience-containted">
              <article className='experience-details'>
                <div>
                <h4>Node.js</h4>
                <small className='text-light'>Basic</small>
                </div>
              </article>
              <article className='experience-details'>
                <div>
                <h4>Express.js</h4>
                <small className='text-light'>intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <div>
                <h4>Mongo db</h4>
                <small className='text-light'>intermediate</small>
                </div>
              </article>
              <article className='experience-details'>
                <div>
                <h4>Python</h4>
                <small className='text-light'>Basic</small>
                </div>
              </article>
             </div>
        </div>
      </div>
    </section>
  )
}

export default experience