import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoInstanceSrvRoutingModule } from './demo-instance-srv-routing.module';
import { DemoSrvComponent } from './containers/demo-srv.component';


@NgModule({
  declarations: [DemoSrvComponent],
  imports: [
    CommonModule,
    DemoInstanceSrvRoutingModule
  ]
})
export class DemoInstanceSrvModule { }
