import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-hello-mat-form-page',
  template: `
    <div fxLayout="column" fxFlexFill style="background-color:red">
      <div fxLayout="row" fxFlex style="background-color:green">
        <div fxLayout="column" fxFlex>
          <form [formGroup]="tridForm" fxFlex="row" fxLayoutGap="12px">
            <mat-form-field>
              <input
                matInput
                formControlName="tridName"
                placeholder="tridnme"
              />
            </mat-form-field>

            <mat-form-field>
              <input
                matInput
                formControlName="tridName"
                placeholder="tridnme"
              />
            </mat-form-field>
          </form>
        </div>
      </div>
      <div fxLayout="row" fxFlex style="background-color:yellow"></div>
      <div fxLayout="row" fxFlex style="background-color:white"></div>
    </div>
  `,
  styles: []
})
export class HelloMatFormPageComponent implements OnInit {
  masterForm: FormGroup;
  Seconform: FormGroup;
  tridForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.masterForm = this.fb.group({
      code: undefined,
      createdDate: new Date(),
      seconData: {}
    });

    this.Seconform = this.fb.group({
      name: undefined,
      tridData: [{}]
    });

    this.tridForm = this.fb.group({
      tridName: undefined,
      type: undefined,
      status: false
    });
  }
  ngOnInit() {}
}
