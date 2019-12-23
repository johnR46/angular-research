import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-dialog',
  templateUrl: './routing-dialog.component.html',
  styles: []
})
export class RoutingDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<RoutingDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onClose() {
    // this.router.navigate([{ outlets: { [this.data.outlet]: null } }]);
    this.dialogRef.close(null);
  }
}
