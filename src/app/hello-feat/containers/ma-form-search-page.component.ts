import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaintenanceCriteriaDto } from '@shared/types/maintenance-criteria-dto';
import { SearchStateService, CrudStateService } from '@core/store/facade';
import { MenuId } from '@core/constants';
import { HelloFeatService } from '../service/hello-feat.service';
import { Maintenance } from '@shared/types/maintenance';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ma-form-search-page',
  template: `
    <div fxLayout="column" fxFlexFill>
      <div fxLayout="row">
        <app-add-btn
          fxFlex
          [name]="'เพิ่มรายการ'"
          [icon]="'add'"
          [length]="'3%'"
          (save)="toCreate()"
        ></app-add-btn>
      </div>
      <app-ma-form-search
        (search)="onSearch($event)"
        (clear)="onClear($event)"
      ></app-ma-form-search>

      <app-ma-form-table
        fxFlex
        [results]="resultSearch$ | async"
        (view)="toView($event)"
        (update)="toUpdate($event)"
      ></app-ma-form-table>
    </div>
  `,
  styles: []
})
export class MaFormSearchPageComponent implements OnInit {
  resultSearch$: Observable<Maintenance[]>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private searchStateService: SearchStateService,
    private helloFeatService: HelloFeatService,
    private crudStateService: CrudStateService
  ) {}

  toView(maintenance: Maintenance): void {
    console.log(maintenance);
    this.crudStateService.view(MenuId.HELLO_FEAT, maintenance);
    this.router.navigate(['view'], { relativeTo: this.activatedRoute });
  }

  toUpdate(maintenance: Maintenance): void {
    console.log(maintenance);
    this.crudStateService.update(MenuId.HELLO_FEAT, maintenance);
    this.router.navigate(['update'], { relativeTo: this.activatedRoute });
  }

  ngOnInit() {
    this.resultSearch$ = this.searchStateService.getResult$(MenuId.HELLO_FEAT);
  }

  toCreate(): void {
    this.crudStateService.create(MenuId.HELLO_FEAT);
    this.router.navigate(['create'], { relativeTo: this.activatedRoute });
  }

  onSearch(criteria: MaintenanceCriteriaDto): void {
    this.searchStateService.updateCriteria(MenuId.HELLO_FEAT, criteria);
    this.helloFeatService
      .findByCriteria(criteria)
      .subscribe((results: Maintenance[]) => {
        this.searchStateService.updateResult(MenuId.HELLO_FEAT, results);
      });
  }

  onClear(): void {
    console.log(' clear ! ');
    this.searchStateService.resetSearch(MenuId.HELLO_FEAT);
  }
}
