export interface NgxDtFeatureState {
  offsetY?: number;
  sorts?: any[];
  clearSorts?: boolean;
  activeRow?: any;
}

export interface NgxDtState {
  [featureKey: string]: NgxDtFeatureState;
}
