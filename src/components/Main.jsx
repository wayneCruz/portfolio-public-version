import introduction from "../data/introduction.js"
import Projects from "./Projects.jsx"
import Contact from "./Contact.jsx"
import Toolkits from "./Toolkits.jsx"
import { useRef, useEffect } from "react"
import myPhoto from "../styles/images/photo.jpg"

export default function Main() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const onScroll = (() => {
      if(aboutRef.current.getBoundingClientRect().top < window.innerHeight 
          && aboutRef.current.getBoundingClientRect().bottom >=0){
            aboutRef.current.className = 'about-me-container about-animation'
        }
      }
    );
          
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  const introElements = introduction.map((intro, index) => 
    <p className='about-text'
      key={index}
    >{intro}</p>
  )
    
  return <main>
          <Projects />

          <section 
            id="about-me" 
            className="about-me-container"
            ref={aboutRef}
            >
            <div className="about-me-intro">
              <div className="about-me-text">
                <p className="about-title">About Me 🖤</p>
                {introElements}
              </div>

              <div className="about-me-image">
                <img src={myPhoto} />
              </div>
            </div>

            <Toolkits />
      </section>

      <Contact />
  </main>
}