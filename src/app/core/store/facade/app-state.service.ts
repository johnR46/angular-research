import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '..';
import { ResetAllFeat, ResetCrud, ResetSearch } from '../actions';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  constructor(private store: Store<AppState>) {}

  resetAllFeat(): void {
    this.store.dispatch(ResetAllFeat());
  }

  resetFeat(featureKey: string): void {
    this.store.dispatch(ResetSearch({ featureKey }));
    this.store.dispatch(ResetCrud({ featureKey }));
  }
}
