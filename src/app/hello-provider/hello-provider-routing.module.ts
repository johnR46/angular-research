import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './containers/form-page/form-page.component';

const routes: Routes = [
  {
    path: '',
    component: FormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelloProviderRoutingModule {}
