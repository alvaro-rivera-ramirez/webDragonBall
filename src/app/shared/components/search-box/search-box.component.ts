import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input()placeholder:string='';

  @Output()
  valueChange=new EventEmitter<string>();

  emitValue(value:string):void{
    this.valueChange.emit(value)
  }
}
