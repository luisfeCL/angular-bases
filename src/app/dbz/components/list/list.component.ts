import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  @Input()
  public CharacterList: Character[] = [];

  deleteCharacterById(id?: string):void{
    //TODO: Emitir el ID del personaje
    this.onDeleteCharacter.emit(id)
  }
}
