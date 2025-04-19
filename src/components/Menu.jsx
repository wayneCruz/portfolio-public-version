import { HashLink } from "react-router-hash-link"

export default function Menu(props) {
  return <nav 
    className={"off-screen-menu"}
    ref={props.ref}
    >
    <span className="menu-options">
      <HashLink 
        onClick={props.click}
        smooth to="#projects"
        className="option"
      >
        Projects</HashLink>
      <HashLink 
        onClick={props.click}
        smooth to="#about-me"
        className="option"
        >
        About Me</HashLink>
      <HashLink 
        onClick={props.click}
        smooth to="#contact"
        className="option"
      >
        Contact</HashLink>
    </span>
  </nav>
}