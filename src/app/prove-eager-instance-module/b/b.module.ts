import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AModule } from '../a/a.module';
import { SaService } from '../a/sa.service';
import { SbService } from './sb.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, AModule],
  providers: [SbService]
})
export class BModule {
  constructor(private sa: SaService) {
    console.log('instance B Module now ');
    console.log('call module A and call sa srv : ', this.sa);
  }
}
