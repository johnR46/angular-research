/**
 * Angular 2 Material 2 datepicker date format
 * StackOverflow:
 * https://stackoverflow.com/questions/44452966/angular-2-material-2-datepicker-date-format
 * Official:
 * https://material.angular.io/components/datepicker/overview#customizing-the-date-implementation
 *
 */
import { NativeDateAdapter } from '@angular/material';
import * as moment from 'moment-timezone';

moment.locale('th');
// moment.tz.setDefault('Asia/Bangkok');

export class AppDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: any): string {
    //  const format = moment(date).format('dd');

    const value = moment(date)
      .add(543, 'y')
      .format('DD/MM/YYYY');
    const thaiDay = moment(date).format('dddd');

    return `${value}, ${thaiDay}`;
  }
}
