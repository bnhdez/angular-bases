import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  //CommonModule trae la funcionalidad de las directivas de ngIF y demas ng
  imports: [
    CommonModule
  ]
})
export class HeroesModules{}
