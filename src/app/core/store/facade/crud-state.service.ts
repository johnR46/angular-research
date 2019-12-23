import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppState } from '..';
import {
  AddItem,
  AddItemSuccess,
  Create,
  CreateSuccess,
  DeleteItemSuccess,
  InactiveSuccess,
  RemoveSuccess,
  Update,
  UpdateFormPristine,
  UpdateItem,
  UpdateItemSuccess,
  UpdateSuccess,
  View
} from '../actions';
import { initialFeatureState } from '../reducers/crud.reducer';
import { CrudFormState, CrudItemMode, CrudMode } from '../types/crud.type';

@Injectable({
  providedIn: 'root'
})
export class CrudStateService {
  constructor(private store: Store<AppState>) {}

  create(featureKey: string, formValue: any = {}): void {
    this.store.dispatch(Create({ featureKey, formValue }));
  }

  createSuccess(featureKey: string, formValue: any = {}): void {
    this.store.dispatch(CreateSuccess({ featureKey, formValue }));
  }

  addItem(featureKey: string, formValue: any): void {
    this.store.dispatch(AddItem({ featureKey, formValue }));
  }

  addItemSuccess(
    featureKey: string,
    itemsProp: string,
    itemPkProp: string,
    itemValue: any
  ): void {
    this.store.dispatch(
      AddItemSuccess({ featureKey, itemsProp, itemPkProp, itemValue })
    );
  }

  view(featureKey: string, formValue: any = {}): void {
    this.store.dispatch(View({ featureKey, formValue }));
  }

  update(featureKey: string, formValue: any = {}): void {
    this.store.dispatch(Update({ featureKey, formValue }));
  }

  updateSuccess(featureKey: string, pkKey: string, formValue: any = {}): void {
    this.store.dispatch(UpdateSuccess({ featureKey, pkKey, formValue }));
  }

  updateItem(featureKey: string, formValue: any, itemValue: any): void {
    this.store.dispatch(UpdateItem({ featureKey, formValue, itemValue }));
  }

  updateItemSuccess(
    featureKey: string,
    itemsProp: string,
    itemPkProp: string,
    itemValue: any
  ): void {
    this.store.dispatch(
      UpdateItemSuccess({ featureKey, itemsProp, itemPkProp, itemValue })
    );
  }

  removeSuccess(featureKey: string, pkKey: string, formValue: any = {}): void {
    this.store.dispatch(RemoveSuccess({ featureKey, pkKey, formValue }));
  }

  inactiveSuccess(
    featureKey: string,
    pkKey: string,
    formValue: any = {}
  ): void {
    this.store.dispatch(InactiveSuccess({ featureKey, pkKey, formValue }));
  }

  deleteItemSuccess(
    featureKey: string,
    itemsProp: string,
    itemPkProp: string,
    itemValue: any
  ): void {
    this.store.dispatch(
      DeleteItemSuccess({ featureKey, itemsProp, itemPkProp, itemValue })
    );
  }

  updateFormPristine(featureKey: string, pristine: boolean): void {
    this.store.dispatch(UpdateFormPristine({ featureKey, pristine }));
  }

  getState$(featureKey: string): Observable<CrudFormState> {
    return this.store.pipe(
      select(s => s.crud[featureKey] || initialFeatureState)
    );
  }

  getMode$(featureKey: string): Observable<CrudMode> {
    return this.getState$(featureKey).pipe(map(s => s.mode || 'CREATE'));
  }

  getItemMode$(featureKey: string): Observable<CrudItemMode> {
    return this.getState$(featureKey).pipe(map(s => s.itemMode || 'ADD'));
  }

  getFormValue$<T = any>(featureKey: string): Observable<T> {
    return this.getState$(featureKey).pipe(map(s => s.formValue || {}));
  }

  getFormPristine$(featureKey: string): Observable<boolean> {
    return this.getState$(featureKey).pipe(map(s => s.formPristine));
  }

  getItemValue$<T = any>(featureKey: string): Observable<T> {
    return this.getState$(featureKey).pipe(map(s => s.itemValue || {}));
  }

  getActivated$(featureKey: string): Observable<boolean> {
    return this.getFormValue$(featureKey).pipe(
      map(formValue => {
        const { active = '1' } = formValue || {};
        return active === '1';
      })
    );
  }
}
