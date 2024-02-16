import { Component } from '@angular/core';

@Component({
  selector: 'dbz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  openMenu:boolean=false;
  constructor(){}
  toggleMenu(){
    this.openMenu=!this.openMenu;
  }
}
