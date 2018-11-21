
let navbar = document.getElementById("navbar")
const menuBtn = document.querySelector('.menu-btn');
let elem = document.querySelector('.m-p-g');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

document.addEventListener('DOMContentLoaded', function () {
  let gallery = new MaterialPhotoGallery(elem);
});

window.onscroll = () => {
  DisplayStyleValue(680, document.getElementById('btn-up'))
}

function ScrollAnimation(e) {
  const classname = e.srcElement.id
  e.preventDefault()
  document.querySelector(`.${classname}`).scrollIntoView({ behavior: 'smooth' })
  document.querySelector('.m-p-g__controls-close').click()
}

function ScrollUp() {
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

function toggleMenu() {
  if (!showMenu) {
    navbar.style.display = "block"
    navbar.classList.remove("fadeOutRight")
    navbar.classList.add("fadeInRight")
    menuBtn.classList.add('close');
    showMenu = true;
  } else {
    navbar.classList.remove("fadeInRight")
    navbar.classList.add("fadeOutRight")
    menuBtn.classList.remove('close');
    showMenu = false;
  }
}

