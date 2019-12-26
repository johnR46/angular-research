import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-address',
  template: `
    <form [formGroup]="employeeForm">
      <div
        formArrayName="address"
        *ngFor="let adddr of address.controls; let i = index"
        style="border:solid 1px green"
      >
        <div [formGroupName]="i" fxLayoutGap="12px">
          <mat-form-field>
            <input
              matInput
              formControlName="address"
              placeholder="address name"
              required
            />
            <mat-error *ngIf="address.at(i).invalid">กรุณาระบุ</mat-error>
          </mat-form-field>
          <mat-form-field>
            <input matInput formControlName="postCode" placeholder="postCode" />
          </mat-form-field>
          <mat-checkbox formControlName="status">ไม่ได้อยู่แล้ว</mat-checkbox>
          <button mat-raised-button color="warn" (click)="deleteAddress(i)">
            delete
          </button>
        </div>
      </div>
    </form>
  `,
  styles: []
})
export class AddAddressComponent {
  @Input() employeeForm: FormGroup;
  @Input() address: FormArray;
  @Output() removeAt = new EventEmitter<number>();
  deleteAddress(index: number): void {
    this.removeAt.emit(index);
  }
}
