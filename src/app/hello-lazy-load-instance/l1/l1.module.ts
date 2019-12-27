import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPageComponent } from './containers/form-page.component';
import { L1sService } from './l1s.service';

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
  providers: [L1sService]
})
export class L1Module {}
