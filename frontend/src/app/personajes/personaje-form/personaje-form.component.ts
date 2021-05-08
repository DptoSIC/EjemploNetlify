import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeImpl } from '../models/personaje-impl';
import { PersonajeService } from '../service/personaje.service';

@Component({
  selector: 'app-personaje-form',
  templateUrl: './personaje-form.component.html',
  styles: [
  ]
})
export class PersonajeFormComponent implements OnInit {
  personaje: PersonajeImpl = new PersonajeImpl('', '', '', '', '', '', '', '', '', null);

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.personajeService.create(this.personaje);
  }

}
