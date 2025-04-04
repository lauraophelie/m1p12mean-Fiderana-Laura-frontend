import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DetailsDemandePiece {
  _id?: string;
  demandeId: string | '';
  pieceId: string;
  quantite: number;
  status?: number | string;
  nomPiece?: string;
}

export interface DemandePiece {
  _id?: string;
  dateDemande?: string;
  motifDemande: string;
  mecanicienId: string;
  status?: number | string;
  details: DetailsDemandePiece[];
}

@Injectable({
  providedIn: 'root'
})
export class DemandesPiecesService {
  private readonly apiUrl = `${environment.apiUrl}/api/demandePiece`;

  constructor(private readonly http: HttpClient) { }

  addDemandePiece(demande: DemandePiece): Observable<any> {
    return this.http.post(this.apiUrl, demande);
  }

  validationDemandePiece(demandeId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/validation/${demandeId}`, demandeId);
  }

  refusDemandePiece(demandeId: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/refus/${demandeId}`, demandeId);
  }

  updateDemandeId(demandeId: string, demande: DemandePiece): Observable<any> {
    return this.http.put(`${this.apiUrl}/modif/${demandeId}`, demande);
  }

  getInfosDemandePiece(demandeId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/details/${demandeId}`);
  }

  getDemandePieceMecanicien(mecanicienId: string, page: string | number, limit: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/meca/${mecanicienId}?page=${page}&limit=${limit}`);
  }

  getDemandePieces(page: string | number, limit: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/paginate?page=${page}&limit=${limit}`);
  }

  deleteDemandePiece(demandeId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${demandeId}`);
  }
}
