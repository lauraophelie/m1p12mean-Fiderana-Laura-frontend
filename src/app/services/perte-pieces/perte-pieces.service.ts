import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface NotificationPerte {
  _id?: string;
  datePerte: string;
  explicationPerte: string;
  mecanicienId: string;
  pieceId: string;
  quantitePerdue: number | string;
  status?: number | string;
}

export interface ReponsePerte {
  _id?: string;
  perteId: string;
  motifRefus: string;
  managerId: string;
}

@Injectable({
  providedIn: 'root'
})
export class PertePiecesService {
  private readonly apiUrl = `${environment.apiUrl}/api/piece/perte`;

  constructor(private readonly http: HttpClient) { }

  insertPertePiece(perte: NotificationPerte): Observable<any> {
    return this.http.post(this.apiUrl, perte);
  }

  validationPerte(perteId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/validation/${perteId}`, null);
  }

  refusPertePiece(perteId: string, reponsePerte: ReponsePerte): Observable<any> {
    return this.http.post(`${this.apiUrl}/refus/${perteId}`, reponsePerte);
  }

  getDetailsPertePiece(perteId: string) {
    return this.http.get(`${this.apiUrl}/details/${perteId}`);
  }

  getPertesPieces(page: number | string, limit: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/paginate?page=${page}&limit=${limit}`);
  }

  getPertesPiecesMecanicien(mecanicienId: string, page: number | string, limit: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/meca/${mecanicienId}?page=${page}&limit=${limit}`);
  }
}
