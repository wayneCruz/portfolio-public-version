import "../styles/contact.css"
import { useRef, useEffect, useState} from "react"
import { Link } from "react-router-dom"
import emailjs from '@emailjs/browser';
import xIcon from "../styles/images/twitter.png"
import linkedinIcon from "../styles/images/linkedin.png"
import githubIcon from "../styles/images/github-sign.png"

export default function Contact() {
  const ref = useRef(null)
  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [buttonText, setButtonText] = useState("Send Message")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true)
    setButtonText("Sending...")
    emailjs
      .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
        publicKey: process.env.PUBLIC_KEY,
      })
      .then(
        () => {
          setButtonText("Message Sent!")
          setError(false)
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
        },
        (error) => {
          setError(true)
        },
      );
    setLoading(false)
  }

  function typingHandler() {
    if(!loading) {
      setButtonText("Send Message")
    }
  }

  useEffect(() => {
    const onScroll = (() => {
      if(ref.current.getBoundingClientRect().top < window.innerHeight 
          && ref.current.getBoundingClientRect().bottom >=0){
            ref.current.className = 'contact-container contact-animation'
        }
      }
    );
      
    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);
  
  return <section 
      id="contact" 
      className="contact-container"
      ref={ref}
      >
      <div className="contact-message">
        <p className="title">Let's Connect! 💌</p>
        <p className="text">If you are interested in either doing business with me, feel free to send me a message here or contact me at my social accounts. I'll respond as soon as possible.
        </p>
        <div className="dev-account-link-container">
          <Link to="https://github.com/wayneCruz" target="_blank">
            <img src={githubIcon} alt="github account"/>
          </Link>
          <Link to="https://www.linkedin.com/in/nylbert-wayne-cruz-128832339" target="_blank">
            <img src={linkedinIcon} alt="linkedin account"/>
          </Link>
          <Link to="https://x.com/@UzumakiWayney" target="_blank">
            <img src={xIcon} alt="X account"/>
          </Link>
        </div>
      </div>

      <form ref={form} 
            className="form-container"
            onSubmit={sendEmail}
            onChange={typingHandler}
            >
        <input ref={nameRef} className="input-name" name="sender_name" type="text" placeholder="name" required />
        <input ref={emailRef} className="input-email" name="sender_email" type="email" placeholder="email" required />
        <textarea ref={messageRef} className="input-message" name="sender_message" placeholder="message" rows="10"></textarea>
        <button>{buttonText}</button>
        { error ? <p className="error-message">
          Something went wrong, please try again later.
        </p> : null}
      </form>
  </section>
}