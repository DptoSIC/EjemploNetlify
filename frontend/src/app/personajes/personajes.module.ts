import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { PersonajeComponent } from './personajes/personaje/personaje.component';
import { FormsModule } from '@angular/forms';
import { AuxiliarService } from '../service/auxiliar.service';
import { PersonajeFormComponent } from './personaje-form/personaje-form.component';
import { PersonajeItemComponent } from './personaje-item/personaje-item.component';



@NgModule({
  declarations: [PersonajesComponent, PersonajeComponent, PersonajeFormComponent, PersonajeItemComponent],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    FormsModule
  ],
  providers: [AuxiliarService]
})
export class PersonajesModule { }
