import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: any;
  menuOptions: any;

  img:String = "assets/img/wallpaper.jpg"

  constructor() {
    this.GenerateTitle();
    this.GenerateOptions();
  }

  ngOnInit() { }

  vidEnded() {
    console.log("video ended");
  }

  GenerateTitle(){
    this.title = "dasdsds"
  }

  GenerateOptions() {
    this.menuOptions = [
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
  }

}
