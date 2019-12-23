import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';
import { Maintenance } from '@shared/types/maintenance';
import { TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-ma-form-table',
  templateUrl: './ma-form-table.component.html',
  styleUrls: ['./ma-form-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MaFormTableComponent implements OnInit {
  @Input() results: Maintenance[] = [];

  @Output() view = new EventEmitter<Maintenance>();
  @Output() update = new EventEmitter<Maintenance>();

  columns: TableColumn[] = [
    {
      name: 'no',
      headerClass: 'w-no',
      cellClass: 'w-no',
      sortable: false,
      resizeable: false,
      draggable: false
    },
    {
      name: 'รหัสซ่อม',
      headerClass: 'w-code',
      cellClass: 'w-code',
      sortable: false,
      resizeable: false,
      draggable: false
    },
    {
      name: 'วันที่บันทึก',
      headerClass: 'w-date',
      cellClass: 'w-date',
      sortable: false,
      resizeable: false,
      draggable: false
    },
    {
      name: 'รายการซ่อม',
      headerClass: 'w-detail',
      cellClass: 'w-detail',
      sortable: false,
      resizeable: false,
      draggable: false
    },
    {
      name: 'จำนวน',
      headerClass: 'w-qty',
      cellClass: 'w-qty',
      sortable: false,
      resizeable: false,
      draggable: false
    },
    {
      name: 'ประเภทการซ่อม',
      headerClass: 'w-type',
      cellClass: 'w-type',
      sortable: false,
      resizeable: false,
      draggable: false
    },

    {
      name: '',
      headerClass: 'w-actions',
      cellClass: 'w-actions',
      sortable: false,
      resizeable: false,
      draggable: false
    }
  ];

  constructor() {}

  ngOnInit() {}

  getRowHeight(row: Maintenance): number {
    console.log(row);
    if (row && row.maintenanceItems) {
      return 30 * (row.maintenanceItems.length + 3) + 1;
    }
  }
}
