import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Notification } from '@core/types';

import { AppState } from '..';
import { AddNotify, InitNotify, UpdateNotify } from '../actions';
import { ConnectWsState, NotifyState } from '../types';

@Injectable({
  providedIn: 'root'
})
export class NotifyStateService {
  connectWs$: Observable<ConnectWsState>;

  private connectWsSubject: Subject<ConnectWsState>;

  constructor(private store: Store<AppState>) {
    this.connectWsSubject = new Subject<ConnectWsState>();
    this.connectWs$ = this.connectWsSubject.asObservable();
  }

  connectWs(user: string): void {
    this.connectWsSubject.next({ connect: true, user });
  }

  disconnectWs(): void {
    this.connectWsSubject.next({ connect: false, user: null });
  }

  initNotify(notifications: Notification[]): void {
    this.store.dispatch(InitNotify({ notifications }));
  }

  addNotify(notification: Notification): void {
    this.store.dispatch(AddNotify({ notification }));
  }

  updateNotify(notification: Notification): void {
    this.store.dispatch(UpdateNotify({ notification }));
  }

  getState$(): Observable<NotifyState> {
    return this.store.pipe(select(s => s.notify));
  }

  getNotifications$(): Observable<Notification[]> {
    return this.getState$().pipe(map(s => s.notifications));
  }

  getUnreadCount$(): Observable<number> {
    return this.getState$().pipe(map(s => s.unreadCount));
  }
}
