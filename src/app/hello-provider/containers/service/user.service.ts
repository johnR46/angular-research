import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  testScope = 'success!!';

  constructor() {
    console.log(' instance in module ');
  }
}
