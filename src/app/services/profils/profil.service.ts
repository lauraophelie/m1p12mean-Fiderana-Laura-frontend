import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Profil {
  _id?: string,
  nomProfil: string,
  description:string,
  appellation:string
}


@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private readonly apiUrl = `${environment.apiUrl}/profils`;
  constructor(private readonly http: HttpClient) { }

  getProfils(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  addProfil(profil: Profil): Observable<any> {
      return this.http.post(this.apiUrl, profil);
    }
}
