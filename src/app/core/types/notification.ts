import { Employee } from './employee';
import { NotificationTo } from './notification-to';

export interface Notification {
  code: string;
  msg: string;
  detail: string;
  refNo: string;
  notificationType: string;
  createdDate: Date;
  createdBy: Employee;
  updatedDate: Date;
  updatedBy: Employee;
  status: string;
  notificationTos: NotificationTo[];
}
