import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HelloDialogService } from '../../service/hello-dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hello-dilog-form-page',
  template: `
    <div fxLayout="column" fxFlex>
      <button
        mat-button
        class="mat-icon-button"
        aria-label="Close dialog"
        (click)="onClose()"
        tabindex="-1"
      >
        <mat-icon>close</mat-icon>
      </button>

      <ng-container [ngSwitch]="data.name">
        <router-outlet
          *ngSwitchCase="data.name"
          name="hello-feat"
        ></router-outlet>
      </ng-container>

      <ng-container [ngSwitch]="data.name">
        <router-outlet
          *ngSwitchCase="data.name"
          name="hello-mat"
        ></router-outlet>
      </ng-container>
    </div>
  `,
  styles: []
})
export class HelloDilogFormPageComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HelloDilogFormPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  onClose(): void {
    console.log(this.dialogRef);


    this.dialogRef.close();
  }
}
