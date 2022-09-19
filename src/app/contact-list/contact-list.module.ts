import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListService } from '../services/contact-list.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ScrollingModule,
  ],
  exports: [
    ContactListComponent
  ],
  providers: [
    ContactListService
  ]
})
export class ContactListModule { }
