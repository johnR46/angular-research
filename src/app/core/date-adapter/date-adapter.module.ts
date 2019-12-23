import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MatNativeDateModule
} from '@angular/material';

import { AppDateAdapter } from './app.date-adapter';

@NgModule({
  imports: [MatNativeDateModule]
})
export class DateAdapterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DateAdapterModule,
      providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'th-TH' },
        { provide: DateAdapter, useClass: AppDateAdapter }
      ]
    };
  }
}
