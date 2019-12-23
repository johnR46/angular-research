import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloMatRoutingModule } from './hello-mat-routing.module';
import { HelloMatFormPageComponent } from './containers/hello-mat-form-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
  MatTabsModule,
  MatDialogModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HelloMatFormPageComponent],
  imports: [
    CommonModule,
    HelloMatRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [],
  providers: [MatDatepickerModule]
})
export class HelloMatModule {}
