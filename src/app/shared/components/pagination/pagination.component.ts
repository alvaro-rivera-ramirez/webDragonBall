import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pagination } from 'src/app/characters/interface/character.interface';

enum Page{
  NEXT='next',
  PREVIOUS='previous',
  LEFT='left',
  RIGHT='right'
}

@Component({
  selector: 'shared-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  @Input()
  pagination!:Pagination;

  @Output()
  valueChange=new EventEmitter<number>();

  handlePage(valuePage:string){
    if(valuePage==Page.PREVIOUS){
      this.valueChange.emit(1);
      return;
    }
    if(valuePage==Page.NEXT){
      this.valueChange.emit(this.pagination.totalPages);
      return;
    }
    if(valuePage==Page.LEFT){
      this.valueChange.emit(this.pagination.currentPage-1);
      return;
    }
    if(valuePage==Page.RIGHT){
      this.valueChange.emit(this.pagination.currentPage+1);
      return;
    }
  }
}
