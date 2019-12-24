export interface Corporation {
  code: string;
  name: string;
  createdDate: Date;
  departments: Department[];
}

export interface Department {
  name: string;
  employees: Employee[];
}

export interface Employee {
  name: string;
  status: boolean;
  type: string;
}
