import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloFeatRoutingModule } from './hello-feat-routing.module';
import { MaFormPageComponent } from './containers/ma-form-page.component';
import { MaFormSearchPageComponent } from './containers/ma-form-search-page.component';
import { MaFormComponent } from './components/ma-form/ma-form.component';
import { MaFormSearchComponent } from './components/ma-form-search/ma-form-search.component';

import { MaFormTableComponent } from './components/ma-form-table/ma-form-table.component';
import { MaFormItemTableComponent } from './components/ma-form-item-table/ma-form-item-table.component';
import { MaFormAddItemComponent } from './components/ma-form-add-item/ma-form-add-item.component';
import { MaFormItemPageComponent } from './containers/ma-form-item-page.component';

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
  imports: [CommonModule, HelloFeatRoutingModule]
})
export class HelloFeatModule {}
