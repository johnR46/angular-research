import { Action, createReducer, on } from '@ngrx/store';

import { ResetAllFeat } from '../actions';
import {
  AddItem,
  AddItemSuccess,
  DeleteItemSuccess,
  UpdateItem,
  UpdateItemSuccess
} from '../actions/crud-item.action';
import {
  Create,
  CreateSuccess,
  ResetCrud,
  Update,
  UpdateFormPristine,
  UpdateSuccess,
  View
} from '../actions/crud.action';
import { CrudFormState, CrudState } from '../types/crud.type';

export const storeKey = 'crud';
export const initialState: CrudState = {};
export const initialFeatureState: CrudFormState = {
  mode: 'CREATE',
  formValue: {},
  formPristine: true,
  itemMode: 'ADD',
  itemValue: {}
};

export const crudReducer = createReducer(
  initialState,
  on(Create, (state, { featureKey, formValue }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: CrudFormState = {
      mode: 'CREATE',
      formPristine: true,
      formValue
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),
  on(CreateSuccess, (state, { featureKey }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: CrudFormState = {
      mode: 'CREATE',
      formValue: {}
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),
  /**
   * Crud Item Action : AddItem, AddItemSuccess
   */
  on(AddItem, (state, { featureKey, formValue }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: CrudFormState = {
      formValue,
      itemMode: 'ADD',
      itemValue: {}
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),
  on(
    AddItemSuccess,
    (state, { featureKey, itemsProp, itemPkProp, itemValue }) => {
      const featState = state[featureKey] || initialFeatureState;
      const { formValue = {} } = featState;
      const items: any[] = formValue[itemsProp] || [];
      const maxPkValue = Math.max(
        ...items.map(item => item[itemPkProp] * -1),
        0
      );
      const mockItemPkValue = (maxPkValue + 1) * -1;
      const updateState: CrudFormState = {
        formValue: {
          ...formValue,
          [itemsProp]: [
            ...items,
            { ...itemValue, [itemPkProp]: mockItemPkValue }
          ]
        }
      };

      return Object.assign({}, state, {
        [featureKey]: { ...featState, ...updateState }
      });
    }
  ),

  on(View, (state, { featureKey, formValue }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: CrudFormState = {
      mode: 'VIEW',
      formValue,
      formPristine: true
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),

  on(Update, UpdateSuccess, (state, { featureKey, formValue }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: CrudFormState = {
      mode: 'UPDATE',
      formValue,
      formPristine: true
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),
  /**
   * Crud Item Action : UpdateItem, UpdateItemSuccess
   */
  on(UpdateItem, (state, { featureKey, formValue, itemValue }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: CrudFormState = {
      formValue,
      itemMode: 'UPDATE',
      itemValue
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),
  on(
    UpdateItemSuccess,
    (state, { featureKey, itemsProp, itemPkProp, itemValue }) => {
      const featState = state[featureKey] || initialFeatureState;
      const { formValue = {} } = featState;
      const items: any[] = formValue[itemsProp] || [];
      const updateState: CrudFormState = {
        formValue: {
          ...formValue,
          [itemsProp]: items.map(item =>
            item[itemPkProp] === itemValue[itemPkProp]
              ? { ...itemValue }
              : { ...item }
          )
        }
      };

      return Object.assign({}, state, {
        [featureKey]: { ...featState, ...updateState }
      });
    }
  ),
  /**
   * Crud Item Action : DeleteItemSuccess
   */
  on(
    DeleteItemSuccess,
    (state, { featureKey, itemsProp, itemPkProp, itemValue }) => {
      const featState = state[featureKey] || initialFeatureState;
      const { formValue = {} } = featState;
      const items: any[] = formValue[itemsProp] || [];
      const updateState: CrudFormState = {
        formValue: {
          ...formValue,
          [itemsProp]: items.filter(
            item => item[itemPkProp] !== itemValue[itemPkProp]
          )
        }
      };

      return Object.assign({}, state, {
        [featureKey]: { ...featState, ...updateState }
      });
    }
  ),

  on(UpdateFormPristine, (state, { featureKey, pristine }) => {
    const featState = state[featureKey] || initialFeatureState;
    const updateState: CrudFormState = {
      formPristine: pristine
    };
    return Object.assign({}, state, {
      [featureKey]: { ...featState, ...updateState }
    });
  }),

  on(ResetCrud, (state, { featureKey }) => {
    return Object.assign({}, state, {
      [featureKey]: { ...initialFeatureState }
    });
  }),

  on(ResetAllFeat, () => {
    return Object.assign({}, initialState);
  })
);

export function reducer(state: CrudState | undefined, action: Action) {
  return crudReducer(state, action);
}
