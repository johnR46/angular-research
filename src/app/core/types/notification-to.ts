import { Employee } from './employee';

export interface NotificationTo {
  id: number;
  toPerson: Employee;
}
