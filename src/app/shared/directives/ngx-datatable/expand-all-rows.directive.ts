import { untilDestroyed } from 'ngx-take-until-destroy';
import {
  Directive,
  Input,
  Self,
  OnInit,
  OnDestroy,
  HostBinding
} from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Directive({
  selector: '[appExpandAllRows]'
})
export class ExpandAllRowsDirective implements OnInit, OnDestroy {
  @HostBinding('class.row-detail')
  readonly rowDetail = true;

  @Input()
  set rows(_: any) {
    setTimeout(() => this.expandAllRows(), 0);
  }

  constructor(@Self() private ngxDt: DatatableComponent) {
    this.onSortColumn();
  }

  ngOnInit(): void {
    setTimeout(() => this.expandAllRows(), 0);
  }

  ngOnDestroy(): void {}

  expandAllRows(): void {
    const isRowDetail =
      this.ngxDt._internalRows &&
      !!this.ngxDt._internalRows.length &&
      this.ngxDt.rowDetail;

    if (isRowDetail) {
      this.ngxDt.rowDetail.expandAllRows();
    }
  }

  onSortColumn(): void {
    if (this.ngxDt) {
      this.ngxDt.sort
        .pipe(untilDestroyed(this))
        .subscribe(() => setTimeout(() => this.expandAllRows(), 0));
    }
  }
}
