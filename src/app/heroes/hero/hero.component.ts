import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string ='waid'
  public age:  number = 30;

  get capitalizedName():string{
    return  this.name.toUpperCase();
  }

  getHeroDescription():string{
    return`${ this.name } - ${ this.age }`;
  }

  changeHero():void{
    this.name = 'Spiderman'

  }

  changeAge(){
    this.age = 25;
  }

  resetfrom():void{
    this.name ='ironman'
    this.age = 45
  }







}
