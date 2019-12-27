import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  testScope = 'success!!';

  constructor() {
    console.log(' instance in module ');
  }
}
