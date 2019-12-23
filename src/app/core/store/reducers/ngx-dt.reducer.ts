import { Action, createReducer, on } from '@ngrx/store';

import {
  ResetAllFeat,
  ResetSearch,
  Update,
  UpdateOffsetY,
  UpdateSorts,
  View
} from '../actions';
import { NgxDtFeatureState, NgxDtState } from '../types';

export const storeKey = 'ngxDt';
export const initialState: NgxDtState = {};
export const initialFeatureState: NgxDtFeatureState = {
  offsetY: 0,
  sorts: [],
  clearSorts: true,
  activeRow: null
};

export const ngxDtReducer = createReducer(
  initialState,
  on(UpdateOffsetY, (state, { featureKey, offsetY }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: NgxDtFeatureState = {
      offsetY,
      clearSorts: false
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),

  on(UpdateSorts, (state, { featureKey, sorts }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: NgxDtFeatureState = {
      sorts,
      clearSorts: false
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),

  on(View, Update, (state, { featureKey, formValue }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: NgxDtFeatureState = {
      activeRow: formValue,
      clearSorts: false
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),

  on(ResetSearch, (state, { featureKey }) => {
    return Object.assign({}, state, {
      [featureKey]: { ...initialFeatureState }
    });
  }),

  on(ResetAllFeat, () => {
    return Object.assign({}, initialState);
  })
);

export function reducer(state: NgxDtState | undefined, action: Action) {
  return ngxDtReducer(state, action);
}
