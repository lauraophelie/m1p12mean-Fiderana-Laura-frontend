import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface RetourPiece {
  _id?: string;
  dateRetour?: string;
  pieceId: string;
  quantiteRetour: number;
  motifRetour: string;
  mecanicienId: string;
  status?: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class RetourPiecesService {
  private readonly apiUrl = `${environment.apiUrl}/api/piece/retour`;

  constructor(private readonly http: HttpClient) { }

  insertRetourPiece(retour: RetourPiece): Observable<any> {
    return this.http.post(this.apiUrl, retour);
  }

  validationRetourPiece(retourId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/validation/${retourId}`, null);
  }

  refusRetourPiece(retourId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/refus/${retourId}`, null);
  }

  getDetailsRetour(retourId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${retourId}`);
  }

  getRetoursPieces(page: string | number, limit: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/paginate?page=${page}&limit=${limit}`);
  }

  getRetoursPiecesMecanicien(mecanicienId: string, page: string | number, limit: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/meca/${mecanicienId}?page=${page}&limit=${limit}`);
  }
}
