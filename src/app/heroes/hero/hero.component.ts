import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iron-Man';
  public age: number = 45;


  //PROPIEDAD
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  //METODO
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

}
