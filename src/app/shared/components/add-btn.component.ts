import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-add-btn',
  template: `
    <div
      fxLayout="row"
      fxFlex
      fxLayoutAlign="end center"
      [fxLayoutGap]="this.length"
    >
      <button
        mat-raised-button
        style="background-color:#65b865"
        class="custom-button"
        (click)="clickSave($event)"
      >
        {{ this.name }}
        <div class="custom-icon">
          <mat-icon class="position-icon" style="color: #65b865">{{
            this.icon
          }}</mat-icon>
        </div>
      </button>

      <button mat-button (click)="clickClosePage($event)" color="warn">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
  styles: []
})
export class AddBtnComponent implements OnInit {
  @Input() name: string = 'บันทึก';
  @Input() icon: string = 'save';
  @Input() length: string = '40%';
  @Output() save = new EventEmitter<void>();
  @Output() closePage = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  clickSave(): void {
    this.save.emit();
  }

  clickClosePage(): void {
    this.closePage.emit();
  }
}
