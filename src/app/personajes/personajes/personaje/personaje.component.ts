import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styles: [
  ]
})
export class PersonajeComponent implements OnInit {
  @Input() personaje: Personaje;

  constructor() { }

  ngOnInit(): void {
  }

}
