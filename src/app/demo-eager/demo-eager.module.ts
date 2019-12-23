import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoEagerRoutingModule } from './demo-eager-routing.module';
import { DemoEagerPageComponent } from './containers/demo-eager-page.component';
import { MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [DemoEagerPageComponent],
  imports: [
    CommonModule,
    DemoEagerRoutingModule,
    MatButtonModule,
    FlexLayoutModule,
    NgxDatatableModule
  ],
  exports: []
})
export class DemoEagerModule {}
