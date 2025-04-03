import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
export interface Client{
  _id?:string,
  nomClient:string,
  prenom:string,
  adresse:string,
  phone:string,
  sexe:Number,
  dateCreationCompte:Date,
  mail:string,
  mdp:string
}
@Injectable({
  providedIn: 'root'
})
export class ClientService {
private readonly apiUrl = `${environment.apiUrl}/clients`;

  constructor(private readonly http: HttpClient) { }

  addClient(client: Client): Observable<any> {
    return this.http.post(this.apiUrl, client);
  }
}