import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title: String;
  description: String;
  mision: any;
  vision: any

  constructor() {
    this.GenerateTitle();
    this.GenerateDescription();
    this.GenerateMision();
    this.GenerateVision();
  }

  ngOnInit() {

  }

  GenerateTitle() {
    this.title = "ACERCA DE NOSOTROS"
  }

  GenerateDescription() {
    this.description = "Mascoclinica fundada en el año 2015 tiene como misión Satisfacer la necesidad médico-clínica de los pacientes brindando un servicio de excelente calidad para así alcanzar nuestro objetivo principal que es la salud y bienestar de las mascotas."
  }

  GenerateMision() {
    this.mision = {
      title: 'NUESTRA MISIÓN',
      description: 'Satisfacer las necesidades médicas y estéticas (peluquerias y spa) brindando un servicio de excelente calidad para así alcanzar nuestro objetivo principal que es la salud y bienestar de nuestros pacientes.'
    }
  }

  GenerateVision() {
    this.vision = {
      title: 'NUESTRA VISIÓN',
      description: 'Ser una clínica lider a nivel regional por su amplio portafolio de servicios con estandares de alta calidad, brindando excelencia y calor de hogar a todos nuestros pacientes.'
    }
  }

}
