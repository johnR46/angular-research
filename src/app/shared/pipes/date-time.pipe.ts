import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment-timezone';

moment.locale('th');
moment.tz.setDefault('Asia/Bangkok');

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {
  transform(date: Date, displayFormat: any): string {
    if (date) {
      const value = moment(date)
        .add(543, 'y')
        .format('DD/MM/YYYY HH:mm');

      //    const th = moment(date).format('dddd');
      //  return th;
      return value;
    }
    return '';
  }
}
