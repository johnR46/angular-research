import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maType'
})
export class MaTypePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      if (value === 'F') {
        return ' ซ่อม';
      } else if (value === ' C') {
        return 'เคลม';
      }
    } else {
      return '';
    }
  }
}
