
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {FaWhatsappSquare} from 'react-icons/fa'
import  { useRef } from 'react';
import emailjs from "emailjs-com";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qa7chuq', 'template_4yqs0pf', form.current, 'XKxhUCvWZfYvFjriL')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h4>Get in touch</h4>
      <h1>Contact me</h1>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className="contact-option-icon"/>
            <h4>Email</h4>
            <h5>adarshalone@gmail.com</h5>
            <a href="mailto:alonkaradarsh@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact-option">
            <BsMessenger className="contact-option-icon"/>
            <h4>messenger</h4>
            <h5>adarshalone</h5>
            <a href="https://facebook.com" target="_blank">Send a message</a>
          </article>
          <article className="contact-option">
            <FaWhatsappSquare className="contact-option-icon"/>
            <h4>Whatsapp</h4>
            <h5>1234567809</h5>
            <a href="https://api.whatsapp.com/send?phone+919284830368" target="_blank">Send a message</a>
          </article>
          {/* end of contact options */}

          
        </div>
        <form  ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='your full name' required />
            <input type="email" name='email' placeholder='your email' required />
            <textarea name="message" rows="7" placeholder='your message' required></textarea>
            <button type="submit" className='btn btn-primary'>send message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact