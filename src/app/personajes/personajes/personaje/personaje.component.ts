import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonajeImpl } from '../../models/personaje-impl';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styles: [
  ]
})
export class PersonajeComponent implements OnInit {
  @Input() personaje: PersonajeImpl;
  @Output() personajeEliminar = new EventEmitter<PersonajeImpl>();

  constructor() { }

  ngOnInit(): void {
  }
  eliminar(): void {
    this.personajeEliminar.emit(this.personaje);
  }
}
