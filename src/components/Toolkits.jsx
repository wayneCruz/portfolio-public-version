import { clsx } from "clsx"
import { skills } from "../data/skills.js"
import { useRef, createRef, useEffect, useState } from "react"
import { rotateCards } from "../utils/animation.js"
import "../styles/about-me.css"
import "../styles/animation.css"
import reactIcon from "../styles/images/cards/React-icon.svg"
import jsIcon from "../styles/images/cards/logo-javascript.svg"
import cssIcon from "../styles/images/cards/CSS3_logo.svg"
import htmlIcon from "../styles/images/cards/HTML5_logo_and_wordmark.svg"
import csharpIcon from "../styles/images/cards/Logo_C_sharp.svg"
import aiIcon from "../styles/images/cards/Adobe_Illustrator_CC_icon.svg"
import arrowIcon from "../styles/images/arrow-right.svg"
import briefcaseIcon from "../styles/images/briefcase-svgrepo-com.svg"

export default function Toolkits() {
  const [cards, setCards] = useState(skills)
  const [cardRefs, setCardRefs] = useState([])
  const [cleared, setCleared] = useState(false)
  const caseRef = useRef(null)
  const toolkitRef = useRef(null)
  
  useEffect(() => {
    const onScroll = (() => {
      if(toolkitRef.current.getBoundingClientRect().top < window.innerHeight 
          && toolkitRef.current.getBoundingClientRect().bottom >=0){
            toolkitRef.current.className = 'toolkit-container toolkit-animation'
        }
      }
    );
      
    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    setCardRefs(prev => 
      Array(cards.length)
        .fill()
        .map((_, i) => prev[i] || createRef())
    )
  }, [cards.length])

  setTimeout(()=> {
    cardRefs.forEach((card, index) => 
      rotateCards(card, index)
    )
  }, 1)

  if(cards.length === 0){
    setTimeout(()=> {
      setCleared(true)
    }, 100)
  }
  
  function remove(id, index) {
    if(index === 0){
      cardRefs[index].current.style.pointerEvents = 'none';
      cardRefs[index].current.style.transform = 'translate(160px, -180px) scale(0.01, 0.01) rotate(80deg)'
      cardRefs[index].current.style.opacity = '0.5';

      caseRef.current.className = 'brief-case brief-case-grow-animate'

      setTimeout(() => {
        setCards(prev => 
          prev.filter(card => 
            card.id !== id
          )
        )

        caseRef.current.className = 'brief-case'
      }, 500)
    }
  }

  const cardElements = cards.map((skill, index) => {
    const styles = {
      zIndex: skills.length - index
    }

    const cardClass = clsx({
      [`card card${skill.id}`]: true,
      [`cardOut${skill.id}`]: false
    })
    return <span 
        ref={cardRefs[index]}
        key={skill.id}
        onClick={() => remove(skill.id, index)}
        className={cardClass}
        style={styles}
      >
        <img src={skill.image} alt={skill.name}/>
      </span>
    }
  )

  const toolkitClass = clsx({
    ['toolkit-container']: true
  })

  const briefcaseClass = clsx({
    ['brief-case']: true
  })

  return <div 
        className={toolkitClass}
        ref={toolkitRef}
    >
      <div className='toolkit-title-container'>
        <p className='toolkit-title'>
          My Toolkit 💻
        </p>
      </div>
    <div 
      className='cards-container'
      >
        {cards.length ? <div className='brief-case-container'>
          <img 
            className={briefcaseClass}
            ref={caseRef}
            src={briefcaseIcon}
          />
        </div> : null}
        
        {cleared &&               
        <div className="card-last">
          <div className="icon">
            <img src={reactIcon} />
            React
          </div>
          <div className="icon">
            <img src={jsIcon} />
            JavaScript
          </div>
          <div className="icon">
            <img src={cssIcon} />
            CSS3
          </div>
          <div className="icon">
            <img src={htmlIcon} />
            HTML5
          </div>
          <div className="icon">
            <img src={csharpIcon} />
            C#
          </div>
          <div className="icon">
            <img src={aiIcon} />
            Adobe Illustrator
          </div>
        </div>}

        {cards.length === 6 && <div className="tooltip">
          <p>Click the Cards!</p>
          <img src={arrowIcon} />
        </div>}
        
        {cardElements}
        

    </div>

  </div>
}