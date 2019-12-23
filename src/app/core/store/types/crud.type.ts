export type CrudMode = 'CREATE' | 'UPDATE' | 'VIEW';
export type CrudItemMode = 'ADD' | 'UPDATE';

export interface CrudFormState {
  mode?: CrudMode;
  formValue?: any;
  formPristine?: boolean;
  itemMode?: CrudItemMode;
  itemValue?: any;
}

export interface CrudState {
  [featureKey: string]: CrudFormState;
}
