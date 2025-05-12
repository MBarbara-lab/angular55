import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  http = inject(HttpClient)

  getVehicles(): Observable<Car> {
    return this.http.get<Car>("http://localhost:3001/vehicles")
  }

  getVinInfo() {

  }
}
