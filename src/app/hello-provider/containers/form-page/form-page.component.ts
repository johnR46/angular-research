import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { HelloFeatService } from 'src/app/hello-feat/service/hello-feat.service';

@Component({
  selector: 'app-form-page',
  template: `
    <div fxLayout="column" fxFlex style="background-color:red">
      <div fxLayout="row" fxFlex style="background-color:green"></div>
      <div fxLayout="row" fxFlex style="background-color:yellow"></div>
    </div>
  `,
  styles: []
})
export class FormPageComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log(this.userService.testScope);
  }
}
