export function showMenu(burgerMenuRef) {
  burgerMenuRef.current.children[0].style.top = "50%"
  burgerMenuRef.current.children[0].style.transform = "translate(-50%, -50%) rotate(45deg)"
  burgerMenuRef.current.children[0].style.backgroundColor = "white"

  burgerMenuRef.current.children[1].style.opacity = "0"

  burgerMenuRef.current.children[2].style.top = "50%"
  burgerMenuRef.current.children[2].style.transform = "translate(-50%, -50%) rotate(-45deg)"
  burgerMenuRef.current.children[2].style.backgroundColor = "white"
}

export function hideMenu(burgerMenuRef) {
  burgerMenuRef.current.children[0].style.top = "25%"
  burgerMenuRef.current.children[0].style.transform = "translate(-50%, 50%)"
  burgerMenuRef.current.children[0].style.backgroundColor = "#31473A"

  burgerMenuRef.current.children[1].style.opacity = "1"

  burgerMenuRef.current.children[2].style.top = "75%"
  burgerMenuRef.current.children[2].style.transform = "translate(-50%, 50%)"
  burgerMenuRef.current.children[2].style.backgroundColor = "#31473A"
}

export function rotateCards(cardRef, index) {
    if (index === 0 && cardRef.current){
      cardRef.current.style.transform = `rotate(0deg)`;
    }else if(cardRef.current){
      cardRef.current.style.transform = `translateX(${10 + (index * 5)}px) rotate(${1 + (index * 2)}deg)`
    }
}

export function toolkitShow(toolkitRef) {
  const position = toolkitRef.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >=0 ){
    toolkitRef.classList.add('visible');
  }else{
    toolkitRef.classList.remove('visible');
  }

  window.addEventListener('scroll', () => {
    const position = toolkitRef.getBoundingClientRect();
  
    if (position.top < window.innerHeight && position.bottom >=0 ){
      toolkitRef.classList.add('visible');
    }else{
      toolkitRef.classList.remove('visible');
    }
  });
}