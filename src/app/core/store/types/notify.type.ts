import { Notification } from '@core/types';

export interface ConnectWsState {
  connect: boolean;
  user: string;
}

export interface NotifyState {
  notifications?: Notification[];
  unreadCount?: number;
}
