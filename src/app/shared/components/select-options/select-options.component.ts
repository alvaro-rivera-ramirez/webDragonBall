import { Component, EventEmitter, Input, Output } from '@angular/core';
import { configOption } from '../../interface/select-options.interface';

@Component({
  selector: 'shared-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.css']
})
export class SelectOptionsComponent {

  @Input()
  public options:configOption[]=[];

  @Output()
  valueChange=new EventEmitter<string>();

  optionValue:string='';

  emitValue():void{
    this.valueChange.emit(this.optionValue)
  }
}
