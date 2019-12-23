import { createAction, props } from '@ngrx/store';

import { InitDataState } from '../types';

export const UpdateData = createAction(
  '[Init] Update Data',
  props<{ data: InitDataState }>()
);

export const ResetData = createAction('[Init] Reset Data');
