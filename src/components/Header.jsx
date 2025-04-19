import "../styles/header.css"
import Menu from "./Menu.jsx"
import { useRef } from "react"
import { showMenu, hideMenu } from "../utils/animation.js"
import scrolldownIcon from "../styles/images/down.png"
import vectorImage from "../styles/images/myVector.png"

export default function Header() {
  const menuRef = useRef(null)
  const burgerMenuRef = useRef(null)

  let menu = false

  function toggleMenu() {
    if(!menu) {
      menuRef.current.style.top = "0"
      menu = true
      showMenu(burgerMenuRef)
    } else{
      menuRef.current.style.top = "-100%"
      menu = false
      hideMenu(burgerMenuRef)
    } 
  }

  return <>
    <header 
      className='header-container'>
      <Menu 
        click={toggleMenu}
        ref={menuRef} />

      <nav className="ham-menu-container">
        <div 
          className="ham-menu"
          onClick={toggleMenu}
          ref={burgerMenuRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <section 
        className="greetings-section">
        <div className="greeting-container">
          <p className="hello-text">Hi! <span>I'm Wayne. 👋</span></p>
          <p className="header-intro">A commited <span>web developer</span> and <span>designer</span> with a passion to work on different exciting web and app projects.</p>        
        </div>
        <span className='vector'>
          <img src={vectorImage} /> 
        </span>
      </section>

      <img className="scroll-down-icon" 
        src={scrolldownIcon} alt="scroll down"/>
    </header>
  </>
}