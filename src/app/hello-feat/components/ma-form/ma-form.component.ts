import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Maintenance } from '@shared/types/maintenance';
import { MaintenanceItem } from '@shared/types/maintenance-item';

@Component({
  selector: 'app-ma-form',
  templateUrl: './ma-form.component.html',
  styleUrls: ['./ma-form.component.scss']
})
export class MaFormComponent implements OnInit {
  @Output() updateItem = new EventEmitter<{
    maForm: Maintenance;
    item: MaintenanceItem;
  }>();
  @Output() addItem = new EventEmitter<Maintenance>();

  maForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildmaFom();
  }

  ngOnInit() {
    console.log(this.maTypeCtrl);
  }

  onUpdateItem(item: MaintenanceItem): void {
    this.updateItem.emit({ maForm: this.maFormValue, item });
  }

  onAddItem(): void {
    this.addItem.emit(this.maFormValue);
  }

  private buildmaFom() {
    this.maForm = this.fb.group({
      code: undefined,
      maType: undefined,
      createdDate: undefined,
      maintenanceItems: [{}]
    });
  }

  get maFormValue(): Maintenance {
    return this.maForm.getRawValue();
  }

  get maTypeCtrl(): FormControl {
    return this.maForm.get('maType') as FormControl;
  }

  gotoAddItemPage(): void {
    this.router.navigate(['../item'], { relativeTo: this.activatedRoute });
  }
}
