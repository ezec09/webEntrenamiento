import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector-form-component.component.html',
  styleUrls: ['./selector-form-component.component.css']
})
export class SelectorFormComponentComponent implements OnInit {

  @Input() queVanAElegir;
  @Input() opcionesDisponibles;

  constructor() {  }

  ngOnInit() {
  }

}
