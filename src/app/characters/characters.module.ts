import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { ListCharacterComponent } from './pages/list-character/list-character.component';
import { SharedModule } from '../shared/shared.module';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListCharacterComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
