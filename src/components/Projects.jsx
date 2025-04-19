import "../styles/projects.css"
import {useEffect, useRef, useState} from "react"
import ProjectOverlay from "./ProjectOverlay.jsx"
import project1vid from "../assets/project1-vid.mp4";
import project2vid from "../assets/project2-vid.mp4";
import project3vid from "../assets/project3-vid.mp4";
import project4vid from "../assets/project4-vid.mp4";

export default function Projects() {
  const headerRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)
  const project4Ref = useRef(null)
  const projectRefs = [project1Ref, project2Ref, project3Ref, project4Ref]
  const project1OverlayRef = useRef(null)
  const project2OverlayRef = useRef(null)
  const project3OverlayRef = useRef(null)
  const project4OverlayRef = useRef(null)
  const projectOverlayRefs = [project1OverlayRef, project2OverlayRef, project3OverlayRef, project4OverlayRef]

  useEffect(() => {
    const onScroll = (() => {
      if(headerRef.current.getBoundingClientRect().top < window.innerHeight 
          && headerRef.current.getBoundingClientRect().bottom >=0){
            headerRef.current.className = 'project-title-container header-projects-animation'
        }

        projectRefs.forEach((project, index) => {
          if(project.current.getBoundingClientRect().top <= window.innerHeight 
            && project.current.getBoundingClientRect().bottom >=0){
              project.current.className = `project${[index + 1]} project-animation${[index + 1]}`
          }
        })
      }
    );
      
    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    projectRefs.forEach((project, index) => {
      project.current.addEventListener("mouseenter", ()=> {
        projectOverlayRefs.forEach((proj, i) => {
          if(index === i) {
            proj.current.className = `project-overlay overlay-show`
          }
        })
      })

      project.current.addEventListener("mouseleave", ()=> {
        projectOverlayRefs.forEach((proj, i) => {
          if(index === i) {
            proj.current.className = `project-overlay`
          }
        })
      })
    })
  }, [])

  return <section 
      id="projects" 
      className="projects-container">
    <header 
      className='project-title-container'
      ref={headerRef}>
      <p className="project-title">
        Projects 💟
      </p>

      {/*fix this it should show 'Click' instead of hover when the screen is small */}
      <p className="project-header-description">
        over any projects to learn more!
      </p>
    </header>

    <div className="projects-grid-container">
      <div className="projects-grid-1">
        <div className="project1"
          ref={project1Ref}>
          <video autoPlay loop muted width="320" height="240">
            <source src={project1vid} type="video/mp4"/>
          </video>
          <ProjectOverlay 
            id="0"
            ref={project1OverlayRef}
            title="Move List"
            description="A web app made with React with the help of API's. It shows all the ongoing, previous, and upcoming popular Movies"
            tools={["React", "JavaScript", "CSS3", "APIs"]}
          />  
        </div>

        <div className="project2"
          ref={project2Ref}>
          <video autoPlay loop muted width="320" height="240">
            <source src={project2vid} type="video/mp4"/>
          </video>
          <ProjectOverlay 
            id="1"
            ref={project2OverlayRef}
            title="Word Guess: Endgame"
            description="A fun puzzle game made with React that was inspired by the Marvel Avengers VS Thanos"
            tools={["React", "JavaScript", "CSS3"]}
          />        
        </div>
      </div>

      <div className="projects-grid-2">
        <div className="project3"
          ref={project3Ref}>
          <video autoPlay loop muted width="320" height="240">
          <source src={project3vid} type="video/mp4"/>
          </video>
          <ProjectOverlay 
            id="2"
            ref={project3OverlayRef}
            title="Mr. Foodie: Recipe Maker"
            description="A recipe generator app made with React with the use of API from openAI"
            tools={["React", "JavaScript", "CSS3", "APIs", "AI"]}
          /> 
        </div>

        <div className="project4"
          ref={project4Ref}>
          <video autoPlay loop muted width="320" height="240">
          <source src={project4vid} type="video/mp4"/>
          </video>
          <ProjectOverlay 
            id="3"
            title="ShipShop"
            description="A complete E-Commerce website made with HTML5, CSS3 and JavaScript"
            ref={project4OverlayRef}
            tools={["JavaScript", "CSS3", "HTML5"]}
          />        
        </div>
      </div>
    </div>

  </section>
}