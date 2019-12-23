export interface SearchFeatureState {
  criteria?: any;
  result?: any;
  activeIndex?: number;
}

export interface SearchState {
  [featureKey: string]: SearchFeatureState;
}
