import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventobindings',
  templateUrl: './ejeventobindings.component.html',
  styleUrls: ['./ejeventobindings.component.css']
})
export class EjeventobindingsComponent implements OnInit {

  texto = 'Antes de presionar el boton';

  modTexto() {
    this.texto = 'Despues de presionar el boton';
  }
  constructor() { }

  ngOnInit() {
  }

}
