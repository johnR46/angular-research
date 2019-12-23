import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MaintenanceItem } from 'src/app/shared/types/maintenance-item';

@Component({
  selector: 'app-ma-form-item-table',
  templateUrl: './ma-form-item-table.component.html',
  styleUrls: ['./ma-form-item-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MaFormItemTableComponent implements OnInit {
  @Input() MaForm: FormGroup;
  @Output() update = new EventEmitter<MaintenanceItem>();

  constructor(private fb: FormBuilder) {
    console.log(this.MaForm);
  }

  ngOnInit() {
    this.MaForm.patchValue({
      maintenanceItems: [{ id: 1, itemName: 'mock Data', qty: 20 }]
    });
  }

  get maintenanceItems(): MaintenanceItem[] {
    return this.MaForm.get('maintenanceItems').value;
  }
}
