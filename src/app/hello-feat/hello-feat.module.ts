import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

import { ShareComponentsModule } from '../shared/components/share-components.module';
import { MaFormAddItemComponent } from './components/ma-form-add-item/ma-form-add-item.component';
import { MaFormItemTableComponent } from './components/ma-form-item-table/ma-form-item-table.component';
import { MaFormSearchComponent } from './components/ma-form-search/ma-form-search.component';
import { MaFormTableComponent } from './components/ma-form-table/ma-form-table.component';
import { MaFormComponent } from './components/ma-form/ma-form.component';
import { MaFormItemPageComponent } from './containers/ma-form-item-page.component';
import { MaFormPageComponent } from './containers/ma-form-page.component';
import { MaFormSearchPageComponent } from './containers/ma-form-search-page.component';
import { HelloFeatRoutingModule } from './hello-feat-routing.module';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatSelectModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxDtModule } from '@shared/directives/ngx-datatable/ngx-dt.module';
import { SharePipesModule } from '@shared/pipes/share-pipes.module';
import { ShareValidatorModule } from '@shared/directives/validator/share-validator.module';

@NgModule({
  declarations: [
    MaFormPageComponent,
    MaFormSearchPageComponent,
    MaFormComponent,
    MaFormSearchComponent,
    MaFormTableComponent,
    MaFormItemTableComponent,
    MaFormAddItemComponent,
    MaFormItemPageComponent
  ],
  imports: [
    CommonModule,
    HelloFeatRoutingModule,
    ReactiveFormsModule,
    ShareComponentsModule,
    FlexLayoutModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // MatNativeDateModule,
    MatDatepickerModule,
    NgxDatatableModule,
    NgxDtModule,
    SharePipesModule,
    ShareValidatorModule
  ],
  // providers: [MatDatepickerModule]
})
export class HelloFeatModule {}
