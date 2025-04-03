import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

export interface GetEtatStocks {
  dateDebut: string;
  dateFin: string;
}

export interface StockVirtuelMecanicien {
  _id?: string;
  dateStock?: string;
  pieceId: string;
  quantiteEntree: number | 0;
  quantiteSortie: number | 0;
  mecanicienId: string;
  motif?: string;
}

export interface StockMecanicien {
  pieceId: any;
  quantiteEntree: number | string;
  quantiteSortie: number | string;
  quantiteRestante: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class GestionStocksService {
  private readonly apiUrl = `${environment.apiUrl}/api/stocks`;

  constructor(private readonly http: HttpClient) { }

  getEtatStocks(etat: GetEtatStocks): Observable<any> {
    return this.http.get(`${this.apiUrl}/etat?dateDebut=${etat.dateDebut}&dateFin=${etat.dateFin}`);
  }

  getStockMecanicien(mecanicienId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/stock/${mecanicienId}`);
  }

  getListePieceMecanicien(mecanicienId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/listePiece/${mecanicienId}`);
  }

  sortieStockMecanicien(sortie: StockVirtuelMecanicien): Observable<any> {
    return this.http.post(`${this.apiUrl}/stock/sortie`, sortie);
  }
}
