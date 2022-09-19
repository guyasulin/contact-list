import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListService } from '../services/contact-list.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ScrollingModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ContactListComponent
  ],
  providers: [
    ContactListService
  ]
})
export class ContactListModule { }
