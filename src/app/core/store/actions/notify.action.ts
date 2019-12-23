import { createAction, props } from '@ngrx/store';

import { Notification } from '@core/types';

export const InitNotify = createAction(
  '[Notify] Init',
  props<{ notifications: Notification[] }>()
);

export const AddNotify = createAction(
  '[Notify] Add',
  props<{ notification: Notification }>()
);

export const UpdateNotify = createAction(
  '[Notify] Update',
  props<{ notification: Notification }>()
);
