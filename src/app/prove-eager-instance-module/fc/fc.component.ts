import { Component, OnInit } from '@angular/core';
import { SaService } from '../a/sa.service';
import { SbService } from '../b/sb.service';

@Component({
  selector: 'app-fc',
  template: `
    <p>
      fc works!
    </p>
  `,
  styles: [],
  providers: [SbService]
})
export class FcComponent implements OnInit {
  constructor(private sb: SbService) {
    console.log('sb srv : ', this.sb);
  }

  ngOnInit() {}
}
