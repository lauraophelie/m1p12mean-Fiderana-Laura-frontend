import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Poste {
  _id?: string,
  nomPoste: string,
  description:string,
  profil:string
}

@Injectable({
  providedIn: 'root'
})
export class PosteService {
 private readonly apiUrl = `${environment.apiUrl}/postes`;
  constructor(private readonly http: HttpClient) { }

  getPostes(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  addPoste(poste: Poste): Observable<any> {
      return this.http.post(this.apiUrl, poste);
    }

  deletePoste(poste: Poste): Observable<any> {
    alert("effacer")
    return this.http.delete(`${this.apiUrl}/${poste._id}`);
  }

  updatePoste(poste: Poste): Observable<any> {
    return this.http.put(`${this.apiUrl}/${poste._id}`, poste);
  }
}

