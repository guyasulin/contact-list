import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseTemplateComponent } from './base-template.component';

const routes: Routes = [
  {
    path: '',
    component: BaseTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseTemplateRoutingModule { }
