import { Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './addcharacter.component.html',
  styleUrl: './addcharacter.component.css'
})
export class AddcharacterComponent {

@Output()
  public onNewCharacter: EventEmitter<character> = new EventEmitter();

  public character: character = {
    name:'',
    power: 0
  };

  emitCharacter():void {


    if ( this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name:'', power: 0 };

  }

}
