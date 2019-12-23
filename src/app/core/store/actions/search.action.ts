import { createAction, props } from '@ngrx/store';

export const UpdateCriteria = createAction(
  '[Search] Update Criteria',
  props<{ featureKey: string; criteria?: any }>()
);

export const UpdateResult = createAction(
  '[Search] Update Result',
  props<{ featureKey: string; result?: any[] }>()
);

export const UpdateActiveIndex = createAction(
  '[Search] Update Active Index',
  props<{ featureKey: string; activeIndex: number }>()
);

export const ResetSearch = createAction(
  '[Search] Reset',
  props<{ featureKey: string }>()
);
