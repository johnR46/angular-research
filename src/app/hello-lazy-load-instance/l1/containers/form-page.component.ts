import { Component, OnInit } from '@angular/core';
import { L1sService } from '../l1s.service';

@Component({
  selector: 'app-form-page',
  template: `
    <p>
      form-page works!
    </p>

    <a [routerLink]="['/l2']" routerLinkActive="router-link-active">
      to load l2 module
    </a>
  `,
  styles: [],
  providers: []
})
export class FormPageComponent implements OnInit {
  constructor(private l1s: L1sService) {
    console.log(' in l1 compo : ', this.l1s);
  }

  ngOnInit() {}
}
