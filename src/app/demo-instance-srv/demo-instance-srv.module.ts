import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoInstanceSrvRoutingModule } from './demo-instance-srv-routing.module';
import { DemoSrvComponent } from './containers/demo-srv.component';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DemoSrvComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    DemoInstanceSrvRoutingModule
  ]
})
export class DemoInstanceSrvModule {}
