import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-entrenamiento',
  templateUrl: './registro-entrenamiento.component.html',
  styleUrls: ['./registro-entrenamiento.component.css']
})
export class RegistroEntrenamientoComponent implements OnInit {

  tipoDeEntrenamiento = ['Velocidad', 'Fondo'];
  lugarDeEntrenamiento = ['Parque Chacabuco', 'CENARD'];
  fechaDeEntrenamiento = ['05/05/05'];
  pasadas = [];

  constructor() { }

  ngOnInit() {
  }

  crearPasada() {
    this.pasadas = this.pasadas.concat((this.pasadas.length + 1));
  }

  borrarTodo() {
    this.pasadas = [];
  }
}
