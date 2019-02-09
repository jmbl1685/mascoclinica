import { scroller, animateScroll as scroll } from "react-scroll";
import Joi from "joi";

let showMenu = false;

export function MenuBtnHandle() {
  const navbar = document.getElementById("navbar");
  const menuBtn = document.querySelector(".menu-btn");
  const darkBackground = document.getElementsByClassName("dark-background")[0];

  if (!showMenu) {
    navbar.style.display = "block";
    navbar.classList.remove("fadeOutRight");
    navbar.classList.add("fadeInRight");
    menuBtn.classList.add("close");
    showMenu = true;
    darkBackground.style.display = "block";
  } else {
    navbar.classList.remove("fadeInRight");
    navbar.classList.add("fadeOutRight");
    menuBtn.classList.remove("close");
    showMenu = false;
    darkBackground.style.display = "none";
  }
}

export function ScrollUp() {
  if (showMenu) {
    MenuBtnHandle();
  }
  scroll.scrollToTop();
}

export function ScrollAnimation(e) {
  const name = e.target.id;
  scroller.scrollTo(name, {
    duration: 1500,
    delay: 100,
    smooth: true
  });
}

export function DisplayStyleValue(value, element) {
  let scroll = {
    BODY: document.body.scrollTop,
    DOCUMENT_ELEMENT: document.documentElement.scrollTop
  };

  if (scroll.BODY > value || scroll.DOCUMENT_ELEMENT > value)
    element.style.opacity = 1;
  else element.style.opacity = 0;
}

export function ContactIsValid(contact) {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    telephone: Joi.number().required(),
    phone: Joi.number().required(),
    email: Joi.string()
      .email()
      .required(),
    issue: Joi.string().required(),
    comment: Joi.string().required()
  });

  const { error, value } = Joi.validate(contact, schema);

  return error == null ? true : false;
}

export function SendEmail(contact) {
  const token = document.querySelector("#g-recaptcha-response").value;
  const TokenIsValid = !(token.trim() === "" || null || undefined);

  if (TokenIsValid) {
    fetch(
      "https://contact-send-email.now.sh/api/v1/contact/sendemail/669BC460-EF5F-4B12-AD5E-33DDABBF534B",
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(Object.assign({ token }, contact))
      }
    )
      .then(res => res.json())
      .then(console.log)
      .catch(console.log);
  }
}