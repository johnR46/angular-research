export interface MasterData {
  code: string;
  createdDate: Date;
  seconData: SeconData;
}

export interface SeconData {
  name: string;
  tridData: TridData[];
}

export interface TridData {
  tridName: string;
  type: string;
  status: boolean;
}
