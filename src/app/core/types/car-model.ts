import { Employee } from './employee';

export interface CarModel {
  code: string;
  name: string;
  detail: string;
  salePrice: number;
  active: string;
  inactiveReason: string;
  createdDate: Date;
  updatedDate: Date;
  requestedDate: Date;
  authorizedDate: Date;
  status: 'A' | 'W' | 'R' | 'C';
  authorizedBy: Employee;
  createdBy: Employee;
  requestedBy: Employee;
  updatedBy: Employee;
  requestedReason?: string;
  rejectedReason?: string;
}
