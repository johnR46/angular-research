import { take, filter, tap } from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { RoutingDialogComponent } from '../containers/routing-dialog.component';

@Injectable()
export class RoutingDialogService {
  constructor(private router: Router, private dialog: MatDialog) {}

  openDialog(
    id: string,
    url: string[],
    outlet = 'dialog',
    payload?: any,
    menuId?: string
  ) {
    if (this.dialog.getDialogById(id)) {
      return of(null).pipe(
        take(1),
        filter(value => !!value)
      );
    }

    this.router.navigate([{ outlets: { [outlet]: url } }]);

    let dialogRef: MatDialogRef<RoutingDialogComponent>;

    dialogRef = this.dialog.open(RoutingDialogComponent, {
      id,
      disableClose: true,
      width: '95vw',
      data: { outlet, criteria: payload, menuId }
    });

    return dialogRef.afterClosed().pipe(
      tap(() => {
        this.router.navigate([{ outlets: { [outlet]: null } }]);
      }),
      filter(value => !!value)
    );
  }

  closeDialog(id: string, data: any) {
    this.dialog.getDialogById(id).close(data);
  }

  openHelloFeatDialog(data?: any) {
    return this.openDialog('hello-feat', ['hello-feat'], 'hello-feat', data);
  }

  openDemoSrvDialog(data?: any) {
    return this.openDialog(
      'demo-service',
      ['demo-service'],
      'demo-service',
      data
    );
  }

  openDialog2(outlet: string, path: string) {
    this.router.navigate([{ outlets: { [outlet]: path } }]);

    let dialogRef: MatDialogRef<RoutingDialogComponent>;

    dialogRef = this.dialog.open(RoutingDialogComponent, {
      disableClose: true,
      width: '95vw',
      data: { outlet }
    });

    return dialogRef.afterClosed().pipe(
      tap(() => {
        this.router.navigate([{ outlets: { [outlet]: null } }]);
      }),
      filter(value => !!value)
    );
  }
}
