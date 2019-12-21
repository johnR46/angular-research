import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoEagerPageComponent } from './containers/demo-eager-page.component';

const routes: Routes = [
  {
    path: '',
    component: DemoEagerPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoEagerRoutingModule {}
