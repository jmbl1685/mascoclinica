import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  creator:String;

  constructor() { 
    this.GenerateCreator();
  }

  ngOnInit() {}

  GenerateCreator(){
    this.creator = "Copyright © 2018 desarrollado por: Juan Batty"
  }

}
