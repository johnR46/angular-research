import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '..';
import {
  ResetSearch,
  UpdateCriteria,
  UpdateResult,
  UpdateActiveIndex
} from '../actions';
import { SearchFeatureState } from '../types';

@Injectable({
  providedIn: 'root'
})
export class SearchStateService {
  constructor(private store: Store<AppState>) {}

  updateCriteria(featureKey: string, criteria: any = {}): void {
    this.store.dispatch(UpdateCriteria({ featureKey, criteria }));
  }

  updateResult(featureKey: string, result: any[] = []): void {
    this.store.dispatch(UpdateResult({ featureKey, result }));
  }

  updateAcitveIndex(featureKey: string, activeIndex: number): void {
    this.store.dispatch(UpdateActiveIndex({ featureKey, activeIndex }));
  }

  resetSearch(featureKey: string): void {
    this.store.dispatch(ResetSearch({ featureKey }));
  }

  getState$(featureKey: string): Observable<SearchFeatureState> {
    return this.store.pipe(select(s => s.search[featureKey] || {}));
  }

  getCriteria$<T = any>(featureKey: string): Observable<T> {
    return this.getState$(featureKey).pipe(map(s => s.criteria));
  }

  getResult$<T = any[]>(featureKey: string): Observable<T> {
    return this.getState$(featureKey).pipe(map(s => s.result));
  }

  getActiveIndex$(featureKey: string): Observable<number> {
    return this.getState$(featureKey).pipe(map(s => s.activeIndex));
  }
}
