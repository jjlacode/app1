import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybindings',
  templateUrl: './ejpropertybindings.component.html',
  styleUrls: ['./ejpropertybindings.component.css']
})
export class EjpropertybindingsComponent implements OnInit {

  texto = 'Escribe algo';
  constructor() {
    setTimeout(() => {
    this.texto = 'Por favor...'; }, 3000);
   }

  ngOnInit() {
  }

}
