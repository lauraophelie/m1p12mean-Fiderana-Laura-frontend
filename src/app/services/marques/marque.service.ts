import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Marque {
  designationMarque: string
}

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private readonly apiUrl = `${environment.apiUrl}/api/marques`;

  constructor(private readonly http: HttpClient) { }

  getMarques(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addMarque(marque: Marque): Observable<any> {
    return this.http.post(this.apiUrl, marque);
  }
}
