import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '..';
import { ResetData, UpdateData } from '../actions';
import { InitDataState } from '../types';

@Injectable({
  providedIn: 'root'
})
export class InitStateService {
  constructor(private store: Store<AppState>) {}

  updateData(data: InitDataState): void {
    this.store.dispatch(UpdateData({ data }));
  }

  resetData(): void {
    this.store.dispatch(ResetData());
  }

  getState$(): Observable<InitDataState> {
    return this.store.pipe(select(s => s.initData || {}));
  }

  getEmployees$(): Observable<any[]> {
    return this.getState$().pipe(map(s => s.employees || []));
  }
}
