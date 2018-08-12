import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-barra-pasada-velocidad',
  templateUrl: './barra-pasada-velocidad.component.html',
  styleUrls: ['./barra-pasada-velocidad.component.css']
})
export class BarraPasadaVelocidadComponent implements OnInit {
  @Input() numeroPasada;
  distancia = 100;
  constructor() { }

  ngOnInit() {
  }

}
