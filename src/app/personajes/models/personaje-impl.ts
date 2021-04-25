import { Personaje } from './personaje';

export class PersonajeImpl implements Personaje {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: any[];

  // tslint:disable-next-line: max-line-length
  constructor(name: any, height: any, mass: any, hair_color: any, skin_color: any, eye_color: any, birth_year: any, gender: any, homeworld: any, films: any[]) {
    this.name = name;
    this.height = height;
    this.mass = mass;
    this.hair_color = hair_color;
    this.skin_color = skin_color;
    this.eye_color = eye_color;
    this.birth_year = birth_year;
    this.gender = gender;
    this.homeworld = this.getIdMundo(homeworld);
    this.films = films;
  }

  getIdMundo(url: string): string {
    url = url.slice(0, url.length - 1)
    return url.slice(url.lastIndexOf('/') + 1, url.length);
  }
}
