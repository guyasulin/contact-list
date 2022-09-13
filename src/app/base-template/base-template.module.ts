import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseTemplateRoutingModule } from './base-template-routing.module';
import { BaseTemplateComponent } from './base-template.component';


@NgModule({
  declarations: [
    BaseTemplateComponent
  ],
  imports: [
    CommonModule,
    BaseTemplateRoutingModule
  ]
})
export class BaseTemplateModule { }
