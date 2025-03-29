import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface RendezVous {
  _id?: string;
  dateRdv: string | Date;
  heureRdv: string;
  clientId: string;
  voitureId: string;
  commentaire?: string;
  status?: string | number;
  services: []
}

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  private readonly apiUrl = `${environment.apiUrl}/api/rendezVous`;

  constructor(private readonly http: HttpClient) { }
  insertRendezVous(rdv: RendezVous): Observable<any> {
    return this.http.post(this.apiUrl, rdv);
  }
  annulationRendezVous(rendezVousId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/annulation/${rendezVousId}`, rendezVousId);
  }
  getDetailsRdv(rendezVousId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${rendezVousId}`);
  }
  getAllRdv(page: string, limit: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/paginate?page=${page}&limit=${limit}`);
  }
  getRdvsClient(clientId: string, page: string | number, limit: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/client/${clientId}?page=${page}&limit=${limit}`);
  }
}
