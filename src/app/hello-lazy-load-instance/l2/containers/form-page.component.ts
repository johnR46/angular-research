import { Component, OnInit } from '@angular/core';
import { L1sService } from '../../l1/l1s.service';

@Component({
  selector: 'app-form-page',
  template: `
    <p>
      form-page works!
    </p>
  `,
  styles: []
})
export class FormPageComponent implements OnInit {
  constructor(private l1sT: L1sService) {
    console.log('l2 compo : ', this.l1sT);
  }

  ngOnInit() {}
}
