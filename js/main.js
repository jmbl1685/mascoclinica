window.addEventListener("load", () => {

  lightGallery(document.getElementById('lightgallery'))

  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false, 
    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  })

})

window.onscroll = () => {

  DisplayStyleValue(680, document.getElementById('btn-up'))
  
}


function NavBarHandle() {

  let navbar = document.getElementById("navbar")
  navbar.style.display = "block"

  if (navbar.classList[1] == "fadeInRight") {
    RemoveClass(navbar, "fadeInRight")
  } else {
    navbar.classList.add("fadeOutRight")
    RemoveClass(navbar, "fadeOutRight")
  }

}

function RemoveClass(element, _class) {

  setTimeout(() => {
    element.classList.remove(_class)
    if (_class == "fadeOutRight") {
      navbar.style.display = "none"
      navbar.classList.add("fadeInRight")
    }
  }, 900)

}

function ScrollAnimation(e){

  const classname = e.srcElement.id
  e.preventDefault()
  document.querySelector(`.${classname}`).scrollIntoView({ behavior: 'smooth' })

}

function ScrollUp(){
  window.scroll({ top: 0, left: 0, behavior: 'smooth' })
}

function DisplayStyleValue(value, element) {

  let scroll = {
      BODY: document.body.scrollTop,
      DOCUMENT_ELEMENT: document.documentElement.scrollTop
  }

  if (scroll.BODY > value || scroll.DOCUMENT_ELEMENT > value)
      element.style.display = 'block'
  else
      element.style.display = 'none'
}


