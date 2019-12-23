import { Action, createReducer, on } from '@ngrx/store';

import { AddNotify, InitNotify, UpdateNotify } from '../actions';
import { NotifyState } from '../types';

export const storeKey = 'notify';
export const initialState: NotifyState = {
  notifications: [],
  unreadCount: 0
};

export const notifyReducer = createReducer(
  initialState,

  on(InitNotify, (state, { notifications = [] }) => {
    const updateState = [...notifications];

    return Object.assign({}, state, {
      notifications: updateState,
      unreadCount: countUnread(updateState)
    });
  }),

  on(AddNotify, (state, { notification = {} }) => {
    const { notifications = [] } = state;
    const updateState = [{ ...notification }, ...notifications];

    return Object.assign({}, state, {
      notifications: updateState,
      unreadCount: countUnread(updateState)
    });
  }),

  on(UpdateNotify, (state, { notification = { code: '' } }) => {
    const { notifications = [] } = state;
    const { code } = notification;
    const updateState = notifications.map(noti =>
      noti.code === code ? { ...notification } : { ...noti }
    );

    return Object.assign({}, state, {
      notifications: updateState,
      unreadCount: countUnread(updateState)
    });
  })
);

export function reducer(state: NotifyState | undefined, action: Action) {
  return notifyReducer(state, action);
}

function countUnread(notifications: any[]): number {
  return notifications.reduce(
    (acc, n) => (n.status === 'N' ? acc + 1 : acc),
    0
  );
}
