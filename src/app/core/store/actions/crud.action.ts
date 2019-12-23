import { createAction, props } from '@ngrx/store';

export const Create = createAction(
  '[Crud] Create',
  props<{ featureKey: string; formValue?: any }>()
);

export const CreateSuccess = createAction(
  '[Crud] Create Success',
  props<{ featureKey: string; formValue: any }>()
);

export const View = createAction(
  '[Crud] View',
  props<{ featureKey: string; formValue: any }>()
);

export const Update = createAction(
  '[Crud] Update',
  props<{ featureKey: string; formValue: any }>()
);

export const UpdateSuccess = createAction(
  '[Crud] Update Success',
  props<{ featureKey: string; pkKey: string; formValue: any }>()
);

export const RemoveSuccess = createAction(
  '[Crud] Remove Success',
  props<{ featureKey: string; pkKey: string; formValue: any }>()
);

export const InactiveSuccess = createAction(
  '[Crud] Inactive Success',
  props<{ featureKey: string; pkKey: string; formValue: any }>()
);

export const UpdateFormPristine = createAction(
  '[Crud] Update Form Pristine',
  props<{ featureKey: string; pristine: boolean }>()
);

export const ResetCrud = createAction(
  '[Crud] Reset',
  props<{ featureKey: string }>()
);
