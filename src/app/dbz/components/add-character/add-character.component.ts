import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  //envio los datos al padre
  @Output()
  //EventEmitter es datos generico <T> se debe especificar el tipo de dato
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    console.log(this.character);

    //validacion que envien nombre
    if ( this.character.name.length === 0 ) return;

    //para limpiar input
    this.character.name = '';
    this.character.power = 0;
  }
}
