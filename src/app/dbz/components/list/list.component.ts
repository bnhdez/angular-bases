import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {

  //@Input() hace que la propiedad dentro de ListComponent reciba informacion del componente padre
  //que es MainPageComponent
  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  onDeleteCharacter(index: number):void {
    //TODO Emitir el id del personaje
    console.log({index});
  }
}
