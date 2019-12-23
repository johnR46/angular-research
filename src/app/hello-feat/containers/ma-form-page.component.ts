import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ma-form-page',
  template: `
    <div fxLayout="column" fxFlex>
      <div fxLayout="row">
        <app-add-btn
          fxFlex
          (closePage)="closePage()"
          [length]="'30%'"
        ></app-add-btn>
      </div>

      <app-ma-form> </app-ma-form>
    </div>
  `,
  styles: []
})
export class MaFormPageComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  closePage(): void {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
