import { Component, OnInit } from '@angular/core';
import { Suma } from 'src/app/Entidades/suma';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  miSuma:Suma=new Suma();

  constructor() {}

  ngOnInit(): void {
  }

  limpiarBotones()
  {
    this.miSuma.edad1 = "";
    this.miSuma.edad2 = "";
    this.miSuma.promedio = 0;
    this.miSuma.suma = 0;
  }
}
