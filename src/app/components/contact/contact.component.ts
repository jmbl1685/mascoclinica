import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title: String;
  information:any;
  token:any
  contactInfo:any;

  constructor() {
    this.GenerateTitle();
    this.GenerateInformation();
  }

  ngOnInit() {

  }

  GenerateTitle() {
    this.title = "CONTÁCTENOS";
  }

  GenerateInformation(){
    this.information = {
      address: 'Transversal 54# 27 - 75 Avenida Bosque Sector San Isidro | Cartagena, Bolívar - Colombia',
      email: 'mascoclinica@outlook.com',
      telephone: '(055) 643 10 08',
      phone: '301 659 64 37'
    }
  }

  SendMessage(form){
    this.token = document.querySelector('#g-recaptcha-response')
    const _form = form.value
    const _recaptcha = {
      recaptcha: this.token.value
    }
    this.contactInfo = Object.assign(_form,_recaptcha)  
    console.log(this.contactInfo)
    form.reset();
  }
}
