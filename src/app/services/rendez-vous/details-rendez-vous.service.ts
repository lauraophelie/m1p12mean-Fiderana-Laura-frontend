import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsRendezVousService {
  private readonly apiUrl = `${environment.apiUrl}/api/rendezVousServices`;

  constructor(private http: HttpClient) { }

  getServicesRendezVous(rendezVousId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${rendezVousId}`);
  }
}
