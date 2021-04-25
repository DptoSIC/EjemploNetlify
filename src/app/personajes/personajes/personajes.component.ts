import { Component, OnInit } from '@angular/core';
import { Personaje } from '../models/personaje';
import { PersonajeService } from '../service/personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [
  ]
})
export class PersonajesComponent implements OnInit {
  personajes: Personaje[] = [];
  genderMap: any = {
    'male': 'Macho', 'female': 'Hembra', 'n/a': 'Sin Género'
  };
  personajeVerDatos: Personaje;

  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
    this.personajeService.getPersonajes().subscribe((response) => this.personajes = this.personajeService.extraerPersonajes(response));
  }

  verDatos(personaje: Personaje): void {
    this.personajeVerDatos = personaje;
  }


}
