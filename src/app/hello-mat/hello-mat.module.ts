import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';

import { HelloMatFormPageComponent } from './containers/hello-mat-form-page.component';
import { HelloMatRoutingModule } from './hello-mat-routing.module';
import { AddAddressComponent } from './components/add-address.component';

@NgModule({
  declarations: [HelloMatFormPageComponent, AddAddressComponent],
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
    MatDatepickerModule
  ],
  exports: []
})
export class HelloMatModule {}
