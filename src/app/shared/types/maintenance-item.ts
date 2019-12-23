import { Sparepart } from './sparepart';

export interface MaintenanceItem {
  id: number;
  itemName: string;
  qty: number;
  sparepart: Sparepart;
}
