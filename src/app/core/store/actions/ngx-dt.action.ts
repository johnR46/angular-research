import { createAction, props } from '@ngrx/store';

export const UpdateOffsetY = createAction(
  '[NgxDt] Update ScrollbarY Pos',
  props<{ featureKey: string; offsetY: number }>()
);

export const UpdateSorts = createAction(
  '[NgxDt] Update Sorts',
  props<{ featureKey: string; sorts: any[] }>()
);
