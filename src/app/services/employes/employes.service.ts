import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Employe {
  _id?: string,
  nomEmploye: string,
  matricule:string,
  adresse:string,
  phone:string,
  CIN:string,
  sexe:Number,
  poste:string,
  dateEmbauche:Date,
  mail:string
}


@Injectable({
  providedIn: 'root'
})
export class EmployesService {
 private readonly apiUrl = `${environment.apiUrl}/employes`;

  constructor(private readonly http: HttpClient) { }

  addEmploye(employe: Employe): Observable<any> {
    return this.http.post(this.apiUrl, employe);
  }
}
