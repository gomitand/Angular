import { Component, EventEmitter, Input, Output} from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: character[] = [{
    name: 'trunks',
    power: 10
  }]
  //onDeletedId = Index value : number
  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string): void {
    if (!id ) return;
    console.log({id})
    //emitir el ID  del personaje
    this.onDelete.emit( id );

  }

}
