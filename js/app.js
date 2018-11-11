const myApp = angular.module("myApp", [])

myApp.controller("DefaultController", ($scope) => {

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
    { name_img: 'img/gallery/001.jpg' },
    { name_img: 'img/gallery/002.jpg' },
    { name_img: 'img/gallery/003.jpg' },
    { name_img: 'img/gallery/004.jpg' },
    { name_img: 'img/gallery/005.jpg' },
    { name_img: 'img/gallery/006.jpg' },
    { name_img: 'img/gallery/007.jpg' },
    { name_img: 'img/gallery/008.jpg' },
    { name_img: 'img/gallery/009.jpg' },
    { name_img: 'img/gallery/010.png' },
    { name_img: 'img/gallery/011.png' }
  ]

  $scope.description = "Dispuestos a atender a su mascota como se merece."

})

myApp.controller("ServiceController", ($scope) => {

  $scope.title = "NUESTROS SERVICIOS"

  $scope.services = [
    {
      logo: "img/service_logo/840644.svg",
      serviceTitle: "CONSULTA EXTERNA Y DOMICILIARIA",
      description: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncusposuere odio in."
    },
    {
      logo: "img/service_logo/547987.svg",
      serviceTitle: "PELUQUERIA",
      description: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncusposuere odio in."
    },
    {
      logo: "img/service_logo/1169363.svg",
      serviceTitle: "SPA",
      description: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncusposuere odio in."
    },
    {
      logo: "img/service_logo/1225576.svg",
      serviceTitle: "CIRUGIA",
      description: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncusposuere odio in."
    },
    {
      logo: "img/service_logo/119042.svg",
      serviceTitle: "HOSPITALIZACIÓN",
      description: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncusposuere odio in."
    },
    {
      logo: "img/service_logo/1087535.svg",
      serviceTitle: "LABORATORIO CLINICO",
      description: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncusposuere odio in."
    },
    {
      logo: "img/service_logo/469387.png",
      serviceTitle: "IMAGENEOLOGIA",
      description: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncusposuere odio in."
    },
    {
      logo: "img/service_logo/620375.svg",
      serviceTitle: "VACUNACIONES",
      description: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncusposuere odio in."
    },
    {
      logo: "img/service_logo/1152410.svg",
      serviceTitle: "PET SHOP",
      description: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncusposuere odio in."
    },
    {
      logo: "img/service_logo/993280.svg",
      serviceTitle: "PROFILAXIS",
      description: "Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncusposuere odio in."
    }
  ]

})

myApp.controller("AboutController", ($scope) => {

  $scope.title = "ACERCA DE NOSOTROS"

  $scope.description = "Mascoclinica fundada en el año 2015 tiene como misión Satisfacer la necesidad médico-clínica de los pacientes brindando un servicio de excelente calidad para así alcanzar nuestro objetivo principal que es la salud y bienestar de las mascotas."

})

myApp.controller("ContactController", ($scope) => {

  $scope.title = "CONTÁCTENOS"

})