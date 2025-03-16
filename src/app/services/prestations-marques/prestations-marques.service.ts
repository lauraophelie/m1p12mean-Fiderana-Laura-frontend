import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface PrestationMarque {
  _id?: string;
  prestationId: string;
  marqueId: string;
  tarif: number;
  dureeEstimee: number;
}

@Injectable({
  providedIn: 'root'
})
export class PrestationsMarquesService {
  private readonly apiUrl = `${environment.apiUrl}/api/prestationsMarque`;

  constructor(private readonly http: HttpClient) { }

  addPrestationMarques(data: PrestationMarque[]): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
