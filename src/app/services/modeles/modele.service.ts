import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface Modele {
  _id?: string,
  designationModele: string,
  marqueId: string
}

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
  private readonly apiUrl = `${environment.apiUrl}/api/modeles`;

  constructor(private readonly http: HttpClient) { }

  getModeles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addModele(modele: Modele): Observable<any> {
    return this.http.post(this.apiUrl, modele);
  }
}
