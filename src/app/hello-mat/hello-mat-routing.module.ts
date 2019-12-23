import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloMatFormPageComponent } from './containers/hello-mat-form-page.component';

const routes: Routes = [
  {
    path: '',
    component: HelloMatFormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloMatRoutingModule {}
