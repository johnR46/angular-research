import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BModule } from '../b/b.module';
import { SbService } from '../b/sb.service';
import { FcComponent } from './fc.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [FcComponent],
  imports: [CommonModule, BModule],
  exports: []
})
export class FcModule {
  constructor(private sb: SbService) {
    console.log('instance FC Module now ');

    console.log('call module B and call sb srv : ', this.sb);
  }
}
