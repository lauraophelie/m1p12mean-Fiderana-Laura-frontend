import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Piece {
  _id?: string,
  nomPiece: string,
  categoriePieceId: string,
  reference: string,
  seuilAlerte: number | 0,
  prixUnitaire: number,
  modelesCompatibles?: []
}

@Injectable({
  providedIn: 'root'
})
export class PiecesService {
  private readonly apiUrl = `${environment.apiUrl}/api/pieces`;

  constructor(private readonly http: HttpClient) { }

  getPieces(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addPiece(piece: Piece): Observable<any> {
    return this.http.post(this.apiUrl, piece);
  }
}
