export interface No1 {
  A: string;
  B: Date;
  C: boolean;
  D: 'X' | 'Y';
}

export interface No2 {
  A: string;
  B: object;
  C: {
    D: string;
  }[];
}

export interface No3 {
  A: string;
  B: {
    C: {
      D: string;
    }[];
  }[];
}
