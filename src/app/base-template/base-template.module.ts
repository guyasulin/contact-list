import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseTemplateRoutingModule } from './base-template-routing.module';
import { BaseTemplateComponent } from './base-template.component';
import { ConectListModule } from '../conect-list/conect-list.module';
import { ToolbarModule } from '../toolbar/toolbar.module';


@NgModule({
  declarations: [
    BaseTemplateComponent
  ],
  imports: [
    CommonModule,
    BaseTemplateRoutingModule,
    // ToolbarModule,
    ConectListModule,

    ToolbarModule
  ]
})
export class BaseTemplateModule { }
