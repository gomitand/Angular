import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { character } from '../interfaces/character.interface';



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:character[] = [{
    id: uuid(),
    name:'krillin',
    power:1000
  },{
    id: uuid(),
    name: 'goku',
    power: 9500
  },{
    id: uuid(),
    name: 'vegeta',
    power: 7500
  },{
    id: uuid(),

    name: 'gohan',

    power: 5500

  }];

addCharacter( character: character ):void {

  const newCharacter: character={id: uuid(), ...character};

  this.characters.push(newCharacter);
}

//onDeleteCharacter( index:number ){
  //this.characters.splice(index,1  );

  deleteCharacterById( id:string){
    this.characters = this.characters.filter( character => character.id !== id );


  }
}


