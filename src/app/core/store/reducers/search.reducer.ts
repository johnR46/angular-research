import { Action, createReducer, on } from '@ngrx/store';

import {
  CreateSuccess,
  InactiveSuccess,
  RemoveSuccess,
  ResetAllFeat,
  ResetSearch,
  UpdateActiveIndex,
  UpdateCriteria,
  UpdateResult,
  UpdateSuccess
} from '../actions';
import { SearchFeatureState, SearchState } from '../types/search.type';

export const storeKey = 'search';
export const initialState: SearchState = {};
export const initialFeatureState: SearchFeatureState = {
  criteria: {},
  result: [],
  activeIndex: -1
};

export const searchReducer = createReducer(
  initialState,
  on(UpdateCriteria, (state, { featureKey, criteria }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: SearchFeatureState = {
      criteria
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),
  on(UpdateResult, (state, { featureKey, result }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: SearchFeatureState = {
      result: (result || []).map(rs => ({ ...rs }))
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),

  on(CreateSuccess, (state, { featureKey, formValue }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: SearchFeatureState = {
      result: [{ ...formValue }, ...(featState.result || [])]
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),
  on(
    UpdateSuccess,
    InactiveSuccess,
    (state, { featureKey, pkKey, formValue }) => {
      const featState = state[featureKey] || initialFeatureState;
      const result = featState.result || [];
      const updateState: SearchFeatureState = {
        result: (result || []).map(rs =>
          rs[pkKey] === formValue[pkKey] ? { ...formValue } : { ...rs }
        )
      };
      return Object.assign({}, state, {
        [featureKey]: { ...featState, ...updateState }
      });
    }
  ),
  on(RemoveSuccess, (state, { featureKey, pkKey, formValue }) => {
    const featState = state[featureKey] || initialFeatureState;
    const result = featState.result || [];
    const updateState: SearchFeatureState = {
      result: (result || []).filter(rs => rs[pkKey] !== formValue[pkKey])
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),

  on(UpdateActiveIndex, (state, { featureKey, activeIndex }) => {
    const featState = state[featureKey] || initialFeatureState;

    return Object.assign({}, state, {
      [featureKey]: { ...featState, activeIndex }
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

export function reducer(state: SearchState | undefined, action: Action) {
  return searchReducer(state, action);
}
