import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoSrvComponent } from './containers/demo-srv.component';

const routes: Routes = [
  {
    path: '',
    component: DemoSrvComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoInstanceSrvRoutingModule {}
