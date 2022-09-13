import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    MatToolbarModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
