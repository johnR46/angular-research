import { Branch } from './branch';

export interface Employee {
  id: number;
  nameTh: string;
  nameEn: string;
  userLogin: string;
  userPwd: string;
  email: string;
  updatedDate: Date;
  active: string;
  inactiveReason: string;
  branch: Branch;
  updatedBy: Employee;
}
