import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './containers/form-page.component';
import { L1sService } from '../l1/l1s.service';

const routers: Routes = [
  {
    path: '',
    component: FormPageComponent
  }
];

@NgModule({
  declarations: [FormPageComponent],
  imports: [CommonModule, RouterModule.forChild(routers)],
  exports: [RouterModule],
  providers: []
})
export class L2Module {}
