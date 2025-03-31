import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsVoitureService {
  private readonly apiUrl = `${environment.apiUrl}/api/detailsVoiture`;

  constructor(private readonly http: HttpClient) { }

  getDetailsVoiture(voitureId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${voitureId}`);
  }
}
