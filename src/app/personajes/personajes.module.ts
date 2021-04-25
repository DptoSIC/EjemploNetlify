import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';



@NgModule({
  declarations: [PersonajesComponent, PersonajeComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class PersonajesModule { }
