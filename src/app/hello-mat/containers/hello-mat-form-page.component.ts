import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HelloDialogService } from 'src/app/hello-dialog/service/hello-dialog.service';

@Component({
  selector: 'app-hello-mat-form-page',
  template: `
    <div fxLayout="column" fxFlexFill>
      <div fxLayout="row" fxFlex>
        <div fxLayout="column" fxFlex>
          <form [formGroup]="employeeForm">
            <mat-form-field>
              <input
                matInput
                formControlName="name"
                placeholder="empolyee name"
              />
            </mat-form-field>

            <div fxLayout="row" fxLayoutAlign="end">
              <button mat-raised-button color="primary" (click)="addAddress()">
                add
              </button>
            </div>

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
                  <input
                    matInput
                    formControlName="postCode"
                    placeholder="postCode"
                  />
                </mat-form-field>
                <button
                  mat-raised-button
                  color="warn"
                  (click)="deleteAddress(i)"
                >
                  delete
                </button>
              </div>
            </div>

            <div style="margin-top:24px">
              <button mat-raised-button color="primary" (click)="save()">
                save
              </button>
            </div>
          </form>

          <div></div>
        </div>

        <div fxLayout="column" fxFlex>
          <pre>{{ this.employeeForm.getRawValue() | json }}</pre>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HelloMatFormPageComponent implements OnInit {
  employeeForm: FormGroup;
  addressForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private helloDialogService: HelloDialogService
  ) {
    this.employeeForm = this.buildEmpForm();
  }

  ngOnInit() {
    let emp = [{ add: 'a' }];

    console.log(emp);
  }

  save(): void {
    this.employeeForm.markAllAsTouched();
    if (this.employeeForm.valid) {
      alert('ผ่าน');
    }
    console.log(this.employeeForm.getRawValue());
  }

  showControl(val): void {
    console.log(val);
  }

  private buildEmpForm(): FormGroup {
    return this.fb.group({
      name: undefined,
      address: this.fb.array([this.buildAddressForm()])
    });
  }

  get address(): FormArray {
    return this.employeeForm.get('address') as FormArray;
  }

  deleteAddress(val: number): void {
    // console.log(this.address.at(val).valid);

    this.address.removeAt(val);
  }

  addAddress(): void {
    this.address.push(this.buildAddressForm());
    // this.address.insert(0, this.buildAddressForm());
  }

  private buildAddressForm(): FormGroup {
    return this.fb.group({
      address: [undefined, Validators.required],
      postCode: ['ggg']
    });
  }
}
