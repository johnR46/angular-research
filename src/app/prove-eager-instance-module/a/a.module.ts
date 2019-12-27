import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaService } from './sa.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [SaService]
})
export class AModule {
  constructor() {
    console.log('instance A Module now ');
  }
}
