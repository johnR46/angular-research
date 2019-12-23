import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MaintenanceCriteriaDto } from '@shared/types/maintenance-criteria-dto';

@Component({
  selector: 'app-ma-form-search',
  templateUrl: './ma-form-search.component.html',
  styleUrls: ['./ma-form-search.component.scss']
})
export class MaFormSearchComponent implements OnInit {
  @Output() search = new EventEmitter<MaintenanceCriteriaDto>();
  @Output() clear = new EventEmitter<void>();

  today = new Date();
  constructor(private fb: FormBuilder) {
    this.buildCriteria();
  }

  formSearch: FormGroup;

  private buildCriteria() {
    this.formSearch = this.fb.group({
      code: '',
      itemName: '',
      startTransDate: [{ value: this.today, disabled: true }],
      endTransDate: [{ value: this.today, disabled: true }]
    });
  }

  ngOnInit() {}

  toClear(): void {
    this.buildCriteria();
    this.clear.emit();
  }

  toSearch(): void {
    this.search.emit(this.formSearchValue);
  }

  get formSearchValue(): MaintenanceCriteriaDto {
    return this.formSearch.getRawValue();
  }
}
