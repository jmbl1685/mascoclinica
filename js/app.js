const myApp = angular.module("myApp", ['vcRecaptcha'])

myApp.controller("DefaultController", function ($scope) {

  $scope.title = {
    "part1": "Equipo de alta ",
    "part2": "experiencia ",
    "part3": "profesional."
  }

  $scope.options = [
    {
      name: "INICIO",
      classname: "home"
    },
    {
      name: "NUESTROS SERVICIOS",
      classname: "services"
    },
    {
      name: "ACERCA DE NOSOTROS",
      classname: "about"
    },
    {
      name: "GALERÍA",
      classname: "gallery"
    },
    {
      name: "CONTÁCTENOS",
      classname: "contact"
    }
  ]

  $scope.gallery = [
    { name_img: 'img/gallery/1.jpg' },
    { name_img: 'img/gallery/2.jpg' },
    { name_img: 'img/gallery/3.jpg' },
    { name_img: 'img/gallery/4.jpg' },
    { name_img: 'img/gallery/5.jpg' },
    { name_img: 'img/gallery/6.jpg' },
    { name_img: 'img/gallery/7.jpg' },
    { name_img: 'img/gallery/8.jpg' },
    { name_img: 'img/gallery/9.jpg' },
    { name_img: 'img/gallery/10.png' },
    { name_img: 'img/gallery/11.png' },
    { name_img: 'img/gallery/12.jpg' },
    { name_img: 'img/gallery/13.jpg' }
  ]

  $scope.description = "Dispuestos a atender a su mascota como se merece."
  $scope.creator = "Copyright © 2018 desarrollado por: Juan Batty"

})

myApp.controller("ServiceController", function ($scope) {

  $scope.title = "NUESTROS SERVICIOS"

  $scope.services = [
    {
      logo: "img/service_logo/840644.svg",
      serviceTitle: "CONSULTA EXTERNA Y DOMICILIARIA",
      description: "Contamos con médicos veterinarios expertos en distintas disciplinas y con la metodología necesaria para emitir diagnósticos que permitirán enfocar los tratamientos de manera eficiente y oportuna."
    },
    {
      logo: "img/service_logo/547987.svg",
      serviceTitle: "PELUQUERIA",
      description: "Contamos con un equipo especializado en el correcto tratamiento del pelo de tu mascota, haciendo que está se vea bella y reluciente."
    },
    {
      logo: "img/service_logo/1169363.svg",
      serviceTitle: "SPA",
      description: "Contamos con expertos estilistas en el arreglo de todas las razas de perros y gatos, las mascotas son bañadas utilizando shampoo y jabones de la más alta calidad."
    },
    {
      logo: "img/service_logo/1225576.svg",
      serviceTitle: "CIRUGIA",
      description: "Contamos con quirófano equipado con anestesia inhalada y monitores trans quirúrgicos en donde al anestesista se le permite visualizar permanentemente las constantes de las mascotas."
    },
    {
      logo: "img/service_logo/119042.svg",
      serviceTitle: "HOSPITALIZACIÓN",
      description: "Contamos con las instalaciones y el personal capacitado para brindar el internamiento de pacientes con fines tanto terapéuticos como diagnostico en donde se requiere la supervisión e intervención  continua (24 horas)."
    },
    {
      logo: "img/service_logo/1087535.svg",
      serviceTitle: "LABORATORIO CLINICO",
      description: "Tenemos convenio con distintos laboratorios que nos permiten correr pruebas como química sanguínea en húmeda y seca, lo que facilita la obtención de datos a cualquier hora y en cuestión de minutos."
    },
    {
      logo: "img/service_logo/469387.png",
      serviceTitle: "IMAGENEOLOGIA",
      description: "Contamos con métodos diagnósticos de alta calidad como son radiología de alta frecuencia que es un equipo de rayos X gentil con el medio ambiente y con mucho menor riesgo para el personal que labora en el área, cumpliendo con las normas oficiales mexicanas al respecto."
    },
    {
      logo: "img/service_logo/620375.svg",
      serviceTitle: "VACUNACIONES",
      description: "Contamos con un control riguros de todas las vacunas necesarias para el bienestar de tu mascota."
    },
    {
      logo: "img/service_logo/1152410.svg",
      serviceTitle: "PET SHOP",
      description: "Contamos con los mejores productos y accesorios que hagan feliz a su mascota; Concentrados, productos de belleza, juguetes y mucho más."
    },
    {
      logo: "img/service_logo/993280.svg",
      serviceTitle: "PROFILAXIS",
      description: "Contamos con las herramientas necesarias para una profunda limpieza dental que permita la eliminación de la placa y sarro dental, contribuyendo a la buena salud de las encías."
    }
  ]

})

myApp.controller("AboutController", function ($scope) {

  $scope.title = "ACERCA DE NOSOTROS"

  $scope.description = "Mascoclinica fundada en el año 2015 tiene como misión Satisfacer la necesidad médico-clínica de los pacientes brindando un servicio de excelente calidad para así alcanzar nuestro objetivo principal que es la salud y bienestar de las mascotas."

  $scope.mision = {
    title: 'NUESTRA MISIÓN',
    description: 'Satisfacer las necesidades médicas y estéticas (peluquerias y spa) brindando un servicio de excelente calidad para así alcanzar nuestro objetivo principal que es la salud y bienestar de nuestros pacientes.'
  }

  $scope.vision = {
    title: 'NUESTRA VISIÓN',
    description: 'Ser una clínica lider a nivel regional por su amplio portafolio de servicios con estandares de alta calidad, brindando excelencia y calor de hogar a todos nuestros pacientes.'
  }

})

myApp.controller("ContactController", function ($scope, contact, vcRecaptchaService) {

  $scope.userinfo = {}

  $scope.title = "CONTÁCTENOS"

  $scope.information = {
    address: 'Transversal 54# 27 - 75 Avenida Bosque Sector San Isidro | Cartagena, Bolívar - Colombia',
    email: 'mascoclinica@outlook.com',
    telephone: '(055) 643 10 08',
    phone: '301 659 64 37'
  }

  $scope.response = null;
  $scope.key = "6LcfMXcUAAAAAH3i2wZPdSogEmD8cxh1lbQa80dh"

  $scope.recaptchaResponse = function (token) {
    $scope.response = token
  };

  $scope.sendMessage = function () {

    if ($scope.contactForm.$valid) {

      const userinfo = $scope.userinfo

      const validation = {
        recaptcha: $scope.response
      }

      const data = Object.assign(userinfo, validation)

      console.log(data)

      contact.SentMessage(data)
        .then(res => {
          $scope.userinfo = {}
          $scope.contactForm.$setPristine(true);
          vcRecaptchaService.reload()
          Notification("notify_success")
        })
        .catch(err => {
          vcRecaptchaService.reload()
          Notification("notify_error")
        })


    }

  }

})

myApp.service('contact', function ($http) {

  this.SentMessage = function (userinfo) {
    console.log(userinfo)
    return $http({
      method: 'GET',
      url: 'https://raw.githubusercontent.com/jmbl1685/diskdb-sample-nodejs/master/data/frameworks.json',
      headers: { 'Content-Type': 'application/json' }
    }).then(function (res) {
      return res;
    }).catch(function (err) {
      return err;
    })
  }

})

// ------------------------------------------------- //

function Notification(valueId){
  let notify = document.getElementById(valueId)
  console.log(notify)
  notify.style.display = "block"  
  setTimeout(() => {
    notify.style.display = "none"
  }, 4000)
}
