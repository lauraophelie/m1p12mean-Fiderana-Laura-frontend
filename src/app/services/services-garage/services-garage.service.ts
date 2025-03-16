import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface ServiceGarage {
  _id?: string,
  nomService: string,
  descriptionService?: string
}

@Injectable({
  providedIn: 'root'
})
export class ServicesGarageService {
  private readonly apiUrl = `${environment.apiUrl}/api/services`;

  constructor(private readonly http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getServicesPages(page: string | number, limit: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/paginate?page=${page}&limit=${limit}`);
  }
  addService(service: ServiceGarage): Observable<any> {
    return this.http.post(this.apiUrl, service);
  }

  getDetailsService(serviceId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${serviceId}`);
  }

  getPrestationsService(serviceId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/prestations/${serviceId}`);
  }
}
