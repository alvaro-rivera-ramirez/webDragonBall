import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interface/character.interface';

@Component({
  selector: 'dbz-card-character',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  ngOnInit(): void {
    if(!this.character)
    throw new Error('Character property is required');
  }

  @Input()
  public character!:Character;
}

