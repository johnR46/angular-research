import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaCodeDirective } from './ma-code.directive';

@NgModule({
  declarations: [MaCodeDirective],
  imports: [CommonModule],
  exports: [MaCodeDirective]
})
export class ShareValidatorModule {}
