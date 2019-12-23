import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '..';
import { UpdateOffsetY, UpdateSorts } from '../actions';
import { initialFeatureState } from '../reducers/ngx-dt.reducer';
import { NgxDtFeatureState } from '../types';

@Injectable({
  providedIn: 'root'
})
export class NgxDtStateService {
  constructor(private store: Store<AppState>) {}

  updateOffsetY(featureKey: string, offsetY: number): void {
    this.store.dispatch(UpdateOffsetY({ featureKey, offsetY }));
  }

  updateSorts(featureKey: string, sorts: any[]): void {
    this.store.dispatch(UpdateSorts({ featureKey, sorts }));
  }

  getState$(featureKey: string): Observable<NgxDtFeatureState> {
    return this.store.pipe(
      select(s => s.ngxDt[featureKey] || initialFeatureState)
    );
  }

  getOffsetY$(featureKey: string): Observable<number> {
    return this.getState$(featureKey).pipe(map(s => s.offsetY));
  }

  getSorts$(featureKey: string): Observable<any[]> {
    return this.getState$(featureKey).pipe(map(s => s.sorts || []));
  }

  getClearSorts$(featureKey: string): Observable<boolean> {
    return this.getState$(featureKey).pipe(map(s => s.clearSorts));
  }

  getActiveRow$(featureKey: string): Observable<any[]> {
    return this.getState$(featureKey).pipe(map(s => s.activeRow));
  }
}
