import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/hello-provider/containers/service/user.service';

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

            <app-add-address
              [employeeForm]="employeeForm"
              [address]="this.address"
              (removeAt)="deleteAddress($event)"
            ></app-add-address>

            <div style="margin-top:24px" fxLayoutGap="12px">
              <button mat-raised-button color="primary" (click)="save()">
                save
              </button>
              <button mat-raised-button color="primary" (click)="testCase()">
                test case remove control
              </button>
            </div>
          </form>
        </div>

        <div fxLayout="column" fxFlex>
          <pre>{{ this.employeeForm.getRawValue() | json }}</pre>

          <a
            [routerLink]="['/hello-provider']"
            routerLinkActive="router-link-active"
          >xx
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HelloMatFormPageComponent implements OnInit {
  employeeForm: FormGroup;
  addressForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.employeeForm = this.buildEmpForm();
  }

  ngOnInit() {
    console.log(this.userService.testScope);
  }

  testCase(): void {
    if (this.address.length <= 1) {
      this.employeeForm.removeControl('userState');
    } else {
      this.employeeForm.removeControl('userName');
    }
  }

  save(): void {
    this.employeeForm.markAllAsTouched();
    if (this.employeeForm.valid) {
      alert('ผ่าน');
    }
    console.log(this.employeeForm.getRawValue());
  }

  private buildEmpForm(): FormGroup {
    return this.fb.group({
      name: undefined,
      userState: [true, Validators.nullValidator],
      userName: [undefined, Validators.nullValidator],
      address: this.fb.array([this.buildAddressForm()])
    });
  }

  private buildAddressForm(): FormGroup {
    return this.fb.group({
      address: [undefined, Validators.required],
      postCode: ['ggg'],
      status: false
    });
  }

  get address(): FormArray {
    return this.employeeForm.get('address') as FormArray;
  }

  deleteAddress(val: number): void {
    console.log(this.address.length);

    if (this.address.length === 1) {
      alert('อย่างน้อยต้องมี 1 อัน');
    } else {
      this.address.removeAt(val);
    }
  }
  addAddress(): void {
    this.address.push(this.buildAddressForm());
  }
}
