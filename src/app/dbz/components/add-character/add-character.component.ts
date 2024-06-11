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

    //depurar en cierto punto || ver mis programa hasta ese punto
    //debugger;

    console.log(this.character);

    //validacion que envien nombre
    if ( this.character.name.length === 0 ) return;

    //propiedad que envia this.character
    this.onNewCharacter.emit(this.character);

    //para limpiar input
    this.character = { name: '', power: 0 };
  }
}
