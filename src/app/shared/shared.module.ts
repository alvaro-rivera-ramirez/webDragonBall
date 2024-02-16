import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SelectOptionsComponent } from './components/select-options/select-options.component';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [HeaderComponent, SearchBoxComponent, SelectOptionsComponent, PaginationComponent],
  imports: [CommonModule,FormsModule,RouterModule],
  exports: [HeaderComponent,SearchBoxComponent,SelectOptionsComponent,PaginationComponent],
})
export class SharedModule { }
