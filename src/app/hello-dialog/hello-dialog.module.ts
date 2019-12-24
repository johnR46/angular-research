import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';

import { HelloDilogFormPageComponent } from './containers/hello-dilog-form-page/hello-dilog-form-page.component';
import { HelloDialogService } from './service/hello-dialog.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HelloDilogFormPageComponent],
  entryComponents: [HelloDilogFormPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [HelloDialogService]
})
export class HelloDialogModule {}
