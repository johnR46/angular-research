import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Sparepart } from '@shared/types/sparepart';

@Component({
  selector: 'app-ma-form-add-item',
  templateUrl: './ma-form-add-item.component.html',
  styleUrls: ['./ma-form-add-item.component.scss']
})
export class MaFormAddItemComponent implements OnInit {
  @Input() spareparts: Sparepart[];

  itemForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildItemForm();
  }

  ngOnInit() {}

  get sparepartCtrl(): FormControl {
    return this.itemForm.get('sparepart') as FormControl;
  }

  private buildItemForm() {
    this.itemForm = this.fb.group({
      id: 0,
      itemName: undefined,
      qty: 0,
      sparepart: [{ code: '', nameEn: '' }]
    });
  }
}
