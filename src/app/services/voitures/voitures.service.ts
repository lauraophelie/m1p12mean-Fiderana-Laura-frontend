import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Voiture {
  _id?: string;
  immatriculation: string;
  marqueId: string;
  modeleId: string;
  categorieVoitureId: string;
  typeEnergieId: string;
  boiteVitesseId: string;
  anneeFabrication?: string | undefined ;
  clientId: string;
  images?: File [];
  remarques?: string;
}

@Injectable({
  providedIn: 'root'
})
export class VoituresService {
  private readonly apiURl = `${environment.apiUrl}/api/voiture`

  constructor(private readonly http: HttpClient) { }

  insertInfosVoiture(voiture: FormData): Observable<any> {
    return this.http.post(this.apiURl, voiture);
  }

  getVoituresClient(clientId: string, page: string, limit: string | number): Observable<any> {
    return this.http.get(`${this.apiURl}/paginate/${clientId}?page=${page}&limit=${limit}`);
  }

  getAllVoituresClient(clientId: string): Observable<any> {
    return this.http.get(`${this.apiURl}/all/${clientId}`);
  }

  getDetailsVoiture(voitureId: string): Observable<any> {
    return this.http.get(`${this.apiURl}/${voitureId}`);
  }
}
