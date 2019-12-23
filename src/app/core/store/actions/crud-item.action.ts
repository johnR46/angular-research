import { createAction, props } from '@ngrx/store';

export const AddItem = createAction(
  '[Crud Item] Add Item',
  props<{ featureKey: string; formValue: any }>()
);

export const AddItemSuccess = createAction(
  '[Crud Item] Add Item Success',
  props<{
    featureKey: string;
    itemsProp: string;
    itemPkProp: string;
    itemValue: any;
  }>()
);

export const UpdateItem = createAction(
  '[Crud Item] Update Item',
  props<{ featureKey: string; formValue: any; itemValue: any }>()
);

export const UpdateItemSuccess = createAction(
  '[Crud Item] Update Item Success',
  props<{
    featureKey: string;
    itemsProp: string;
    itemPkProp: string;
    itemValue: any;
  }>()
);

export const DeleteItemSuccess = createAction(
  '[Crud Item] Delete Item Success',
  props<{
    featureKey: string;
    itemsProp: string;
    itemPkProp: string;
    itemValue: any;
  }>()
);
