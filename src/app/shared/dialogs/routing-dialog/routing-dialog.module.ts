import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RoutingDialogComponent } from './containers/routing-dialog.component';
import { RouterModule } from '@angular/router';
import { RoutingDialogService } from './service/routing-dialog.service';
import { MatDatepickerContent, MatDatepickerModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [RoutingDialogComponent],
  entryComponents: [RoutingDialogComponent, MatDatepickerContent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDatepickerModule,
    NgxDatatableModule
  ],
  providers: [RoutingDialogService]
})
export class RoutingDialogModule {}
