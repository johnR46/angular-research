import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePipe } from './date-time.pipe';
import { MaTypePipe } from './ma-type.pipe';

@NgModule({
  declarations: [DateTimePipe, MaTypePipe],
  imports: [CommonModule],
  exports: [DateTimePipe, MaTypePipe]
})
export class SharePipesModule {}
