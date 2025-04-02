import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Authentification {
  mail:string,
  mdp:string,
  profil:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private readonly apiUrl = `${environment.apiUrl}/login`;

  constructor(private readonly http: HttpClient) { }

  authentificate(authentification: Authentification): Observable<any> {
    return this.http.post(this.apiUrl, authentification);
  }
}
