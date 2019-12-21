import { MaintenanceItem } from './maintenance-item';

export interface Maintenance {
  code: string;
  maType: string;
  createdDate: Date;
  maintenanceItems: MaintenanceItem[];
}
