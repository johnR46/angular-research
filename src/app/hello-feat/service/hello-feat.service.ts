import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sparepart } from 'src/app/shared/types/sparepart';
import { environment } from 'src/environments/environment';
import { Maintenance } from 'src/app/shared/types/maintenance';
import { MaintenanceCriteriaDto } from 'src/app/shared/types/maintenance-criteria-dto';

@Injectable({
  providedIn: 'root'
})
export class HelloFeatService {
  private firstUrl = '/exam-ng/api/sparepart';
  private seconUrl = '/exam-ng/api/maintenance';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Sparepart[]> {
    return this.http.get<Sparepart[]>(
      `${environment.url}${this.firstUrl}/find-all`
    );
  }

  findByCriteria(criteria: MaintenanceCriteriaDto): Observable<Maintenance[]> {
    return this.http.post<Maintenance[]>(
      `${environment.url}${this.seconUrl}/find-by-criteria`,
      criteria
    );
  }
}
