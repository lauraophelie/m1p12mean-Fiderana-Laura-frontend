import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CategoriePiece {
  _id?: string,
  designationCategoriePiece: string
}

@Injectable({
  providedIn: 'root'
})
export class CategoriePiecesService {
  private readonly apiUrl = `${environment.apiUrl}/api/categoriePiece`;

  constructor(private readonly http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(this.apiUrl);
  };

  addCategorie(categorie: CategoriePiece): Observable<any> {
    return this.http.post(this.apiUrl, categorie);
  };
}
