import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
  private readonly apiUrl = `${environment.apiUrl}/api/modeles`;

  constructor(private readonly http: HttpClient) { }
}
