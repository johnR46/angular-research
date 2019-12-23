import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBtnComponent } from './add-btn.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [AddBtnComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, FlexLayoutModule],
  exports: [AddBtnComponent]
})
export class ShareComponentsModule {}
