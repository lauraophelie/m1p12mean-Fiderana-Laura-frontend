import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface Modele {
  designationModele: string,
  marqueId: string
}

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
  private readonly apiUrl = `${environment.apiUrl}/api/modeles`;

  constructor(private readonly http: HttpClient) { }

  addModele(modele: Modele): Observable<any> {
    return this.http.post(this.apiUrl, modele);
  }
}
