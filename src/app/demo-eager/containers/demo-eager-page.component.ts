import { Component, OnInit } from '@angular/core';
import { RoutingDialogService } from '@shared/dialogs/routing-dialog/service/routing-dialog.service';

@Component({
  selector: 'app-demo-eager-page',
  template: `
    <div fxLayout="column" fxFlexFill>
      <h3 style="text-align:center">
        Demp - eager
      </h3>
      <br />

      <div fxLayout="row" fxLayoutAlign="center">
        <button mat-raised-button (click)="openDialog2()">openDialog</button>
      </div>
    </div>
  `,
  styles: []
})
export class DemoEagerPageComponent implements OnInit {
  constructor(private routingDialogService: RoutingDialogService) {}

  ngOnInit() {}

  openDialog(): void {
    this.routingDialogService.openHelloFeatDialog().subscribe(v => {
      console.log(v);
    });
  }

  openDialog2(): void {
    this.routingDialogService
      .openDialog2('hello-feat', 'hello-feat')
      .subscribe(v => {
        console.log(v);
      });
  }
}
