import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DetailsDemandePiece {
  _id?: string;
  demandeId: string | '';
  pieceId: string;
  quantite: number | string;
  status?: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class DetailsDemandePiecesService {
  private readonly apiUrl = `${environment.apiUrl}/api/demandePieceDetails`;

  constructor(private readonly http: HttpClient) { }

  getDetailsDemande(demandeId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${demandeId}`);
  }

  deleteDetailsDemande(demandeId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${demandeId}`);
  }
}
