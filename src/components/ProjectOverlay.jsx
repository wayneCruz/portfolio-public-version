export default function ProjectOverlay(props) {
  const toolUsed = props.tools.map((tool, i) => 
    <span key={i}>{tool}</span>
  )

  const gitHubLinks = [
    "https://github.com/wayneCruz/movie-list-public-version",
    "https://github.com/wayneCruz/wordguess",
    "https://github.com/wayneCruz/foodie-recipe-public-version",
    "https://github.com/wayneCruz/shipshop/tree/main"
  ]

  const projectLinks = [
    "https://waynecruz.github.io/movie-list/",
    "https://waynecruz.github.io/wordguess/",
    "https://waynecruz.github.io/foodie-recipe/",
    "https://waynecruz.github.io/shipshop/home.html"
  ]

  function goGithubLink() {
    window.open(gitHubLinks[props.id], "_blank")
  }

  function goProjectLink() {
    window.open(projectLinks[props.id], "_blank")
  }

  return <div 
    ref={props.ref}
    className="project-overlay">
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <div className="tool-used-container">
      {toolUsed}
    </div>
    <div className="project-button-container">
      <button 
        onClick={goProjectLink}>
        VIEW LIVE
      </button>
      <button 
        onClick={goGithubLink}>
        GITHUB
      </button>
    </div>
  </div>
}