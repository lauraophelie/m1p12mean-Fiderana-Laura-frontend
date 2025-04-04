import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Prestation {
  _id?: string;
  nomPrestation: string;
  descriptionPrestation?: string;
  serviceId: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private readonly apiUrl = `${environment.apiUrl}/api/prestations`;

  constructor(private readonly http: HttpClient) { }

  getPrestations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPrestationsPages(page: string | number, limit: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/paginate?page=${page}&limit=${limit}`);
  }

  getDetailsPrestation(prestationId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${prestationId}`);
  }

  getMarquesPrestation(prestationId: string, page: string | number, limit: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/marques/${prestationId}?page=${page}&limit=${limit}`);
  }

  addPrestation(prestation: Prestation): Observable<any> {
    return this.http.post(this.apiUrl, prestation);
  }

  updatePrestation(prestationId: string, prestation: Prestation): Observable<any> {
    return this.http.put(`${this.apiUrl}/${prestationId}`, prestation);
  }
}
