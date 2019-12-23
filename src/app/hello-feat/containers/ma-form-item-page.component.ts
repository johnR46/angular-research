import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sparepart } from '@shared/types/sparepart';
import { HelloFeatService } from '../service/hello-feat.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ma-form-item-page',
  template: `
    <div fxLayout="column" fxFlexFill>
      <div fxLayout="row">
        <app-add-btn
          fxFlex
          (closePage)="closePage()"
          [name]="'ตกลง'"
          [icon]="'done'"
          [length]="'20%'"
          (save)="addItemDone()"
        ></app-add-btn>
      </div>

      <app-ma-form-add-item
        [spareparts]="spareparts$ | async"
      ></app-ma-form-add-item>
    </div>
  `,
  styles: []
})
export class MaFormItemPageComponent implements OnInit {
  spareparts$: Observable<Sparepart[]>;

  constructor(
    private helloFeatService: HelloFeatService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.spareparts$ = this.helloFeatService.findAll();
  }

  closePage(): void {
    this.router.navigate(['../create'], { relativeTo: this.activatedRoute });
  }

  addItemDone(): void {
    this.router.navigate(['../create'], { relativeTo: this.activatedRoute });
  }
}
