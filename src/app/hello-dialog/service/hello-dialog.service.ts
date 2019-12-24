import { tap } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HelloDilogFormPageComponent } from '../containers/hello-dilog-form-page/hello-dilog-form-page.component';
import { OutLetConfig } from '../outlet-config';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class HelloDialogService {
  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog(data?: OutLetConfig): Observable<any> {
    const dialogRef = this.dialog.open(HelloDilogFormPageComponent, {
      width: '1400px',
      height: '700px',
      data: { nameoutlet: data.name, path: data.path },
      id: 'xxxxx'
    });
    console.log(this.dialog.getDialogById('mat-dialog-0'));
    // this.dialog.
    this.router.navigate([{ outlets: { [data.name]: [data.path] } }]);

    return dialogRef
      .afterClosed()
      .pipe(
        tap(() => this.router.navigate([{ outlets: { [data.name]: null } }]))
      );
  }
}
