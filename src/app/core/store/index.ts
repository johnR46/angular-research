import { InjectionToken } from '@angular/core';
import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

import * as fromCrud from './reducers/crud.reducer';
import * as fromInit from './reducers/init.reducer';
import * as fromNgxDt from './reducers/ngx-dt.reducer';
import * as fromNotify from './reducers/notify.reducer';
import * as fromSearch from './reducers/search.reducer';
import {
  CrudState,
  InitDataState,
  NgxDtState,
  NotifyState,
  SearchState
} from './types';

export interface AppState {
  [fromCrud.storeKey]: CrudState;
  [fromSearch.storeKey]: SearchState;
  [fromInit.storeKey]: InitDataState;
  [fromNotify.storeKey]: NotifyState;
  [fromNgxDt.storeKey]: NgxDtState;
}

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<AppState, Action>
>('Root reducers token', {
  factory: () => ({
    [fromCrud.storeKey]: fromCrud.reducer,
    [fromSearch.storeKey]: fromSearch.reducer,
    [fromInit.storeKey]: fromInit.reducer,
    [fromNotify.storeKey]: fromNotify.reducer,
    [fromNgxDt.storeKey]: fromNgxDt.reducer
  })
});

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
