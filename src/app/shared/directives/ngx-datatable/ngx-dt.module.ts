import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandAllRowsDirective } from './expand-all-rows.directive';

@NgModule({
  declarations: [ExpandAllRowsDirective],
  imports: [CommonModule],
  exports: [ExpandAllRowsDirective]
})
export class NgxDtModule {}
