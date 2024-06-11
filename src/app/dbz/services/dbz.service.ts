import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter(character: Character): void {
    // console.log('Main Page');
    // console.log(character);

    // const newCharacter:Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    // }

    //con ...character hago spread de las propiedades del objeto
    //que traiga todo adentro de character
    const newCharacter:Character = { id:uuid(), ...character }

    //push al final del arreglo || unshift al inicio del arreglo
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index, 1);
  }
}
