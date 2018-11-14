import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  title:String;
  services:any;

  constructor() { 
    this.GenerateTitle();
    this.GenerateServices();
  }

  ngOnInit() {

  }

  GenerateTitle(){
    this.title = "NUESTROS SERVICIOS";
  }

  GenerateServices(){

    this.services = [
      {
        logo: "assets/img/service_logo/840644.svg",
        serviceTitle: "CONSULTA EXTERNA Y DOMICILIARIA",
        description: "Contamos con médicos veterinarios expertos en distintas disciplinas y con la metodología necesaria para emitir diagnósticos que permitirán enfocar los tratamientos de manera eficiente y oportuna."
      },
      {
        logo: "assets/img/service_logo/547987.svg",
        serviceTitle: "PELUQUERIA",
        description: "Contamos con un equipo especializado en el correcto tratamiento del pelo de tu mascota, haciendo que está se vea bella y reluciente."
      },
      {
        logo: "assets/img/service_logo/1169363.svg",
        serviceTitle: "SPA",
        description: "Contamos con expertos estilistas en el arreglo de todas las razas de perros y gatos, las mascotas son bañadas utilizando shampoo y jabones de la más alta calidad."
      },
      {
        logo: "assets/img/service_logo/1225576.svg",
        serviceTitle: "CIRUGIA",
        description: "Contamos con quirófano equipado con anestesia inhalada y monitores trans quirúrgicos en donde al anestesista se le permite visualizar permanentemente las constantes de las mascotas."
      },
      {
        logo: "assets/img/service_logo/119042.svg",
        serviceTitle: "HOSPITALIZACIÓN",
        description: "Contamos con las instalaciones y el personal capacitado para brindar el internamiento de pacientes con fines tanto terapéuticos como diagnostico en donde se requiere la supervisión e intervención  continua (24 horas)."
      },
      {
        logo: "assets/img/service_logo/1087535.svg",
        serviceTitle: "LABORATORIO CLINICO",
        description: "Tenemos convenio con distintos laboratorios que nos permiten correr pruebas como química sanguínea en húmeda y seca, lo que facilita la obtención de datos a cualquier hora y en cuestión de minutos."
      },
      {
        logo: "assets/img/service_logo/469387.png",
        serviceTitle: "IMAGENEOLOGIA",
        description: "Contamos con métodos diagnósticos de alta calidad como son radiología de alta frecuencia que es un equipo de rayos X gentil con el medio ambiente y con mucho menor riesgo para el personal que labora en el área, cumpliendo con las normas oficiales mexicanas al respecto."
      },
      {
        logo: "assets/img/service_logo/620375.svg",
        serviceTitle: "VACUNACIONES",
        description: "Contamos con un control riguros de todas las vacunas necesarias para el bienestar de tu mascota."
      },
      {
        logo: "assets/img/service_logo/1152410.svg",
        serviceTitle: "PET SHOP",
        description: "Contamos con los mejores productos y accesorios que hagan feliz a su mascota; Concentrados, productos de belleza, juguetes y mucho más."
      },
      {
        logo: "assets/img/service_logo/993280.svg",
        serviceTitle: "PROFILAXIS",
        description: "Contamos con las herramientas necesarias para una profunda limpieza dental que permita la eliminación de la placa y sarro dental, contribuyendo a la buena salud de las encías."
      }
    ]

  }

}
