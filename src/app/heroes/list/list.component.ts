import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames:string[] = ['Spider-Man', 'Iron-Man', 'Hulk', 'She-Hulk', 'Thor'];
  public deletedHero?:string;

  // removeLastHero():void {
  //   deleted hero solo existe dentro de removeLastHero()
  //   const deletedhero = this.heroNames.pop();
  // }

  removeLastHero(): void {
    //.pop() Remueve ulitmo elemento de la lista y lo regresa
    this.deletedHero = this.heroNames.pop();
  }

}
