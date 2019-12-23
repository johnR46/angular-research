import { Action, createReducer, on } from '@ngrx/store';

import { ResetData, UpdateData } from '../actions';
import { InitDataState } from '../types';

export const storeKey = 'initData';
export const initialState: InitDataState = {};

export const initReducer = createReducer(
  initialState,

  on(UpdateData, (state, { data }) => {
    return Object.assign({}, state, {
      ...data
    });
  }),

  on(ResetData, () => {
    return Object.assign({}, initialState);
  })
);

export function reducer(state: InitDataState | undefined, action: Action) {
  return initReducer(state, action);
}
