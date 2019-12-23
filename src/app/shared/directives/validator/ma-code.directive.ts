import { Directive, HostListener, ElementRef, DoCheck } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[formControlName][appMaCode]'
})
export class MaCodeDirective implements DoCheck {
  /*
  Example Use : <input formControlName="xyz" appMaCode
    Only A-Z 0-9 -
  */

  private maCodeRegex = new RegExp(/[^a-zA-Z0-9\-]+/g);

  constructor(private inputControl: NgControl) {}

  ngDoCheck(): void {
    console.log(this.inputControl.control);

    const prvVal: string = this.inputControl.control.value || '';
    const nextVal: string = prvVal
      .replace(this.maCodeRegex, '')
      .toLocaleUpperCase()
      .trim();

    this.inputControl.control.setValue(nextVal);
  }
}
