import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoEagerRoutingModule } from './demo-eager-routing.module';
import { DemoEagerPageComponent } from './containers/demo-eager-page.component';

@NgModule({
  declarations: [DemoEagerPageComponent],
  imports: [CommonModule, DemoEagerRoutingModule],
  exports: []
})
export class DemoEagerModule {}
