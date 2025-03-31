import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementsVoitureService {
  private readonly apiURl = `${environment.apiUrl}/api/elementsVoiture`;

  constructor(private readonly http: HttpClient) { }

  /// boite de vitesse
  getVitesses(): Observable<any> {
    return this.http.get(`${this.apiURl}/vitesse`);
  }

  insertVitesse(vitesse: any): Observable<any> {
    return this.http.post(`${this.apiURl}/vitesse`, vitesse);
  }

  /// catégorie de voiture
  getCategoriesVoiture(): Observable<any> {
    return this.http.get(`${this.apiURl}/categorieVoiture`);
  }

  insertCategorieVoiture(categorie: any): Observable<any> {
    return this.http.post(`${this.apiURl}/categorieVoiture`, categorie);
  }

  /// type d'énergie
  getTypeEnergies(): Observable<any> {
    return this.http.get(`${this.apiURl}/typeEnergie`);
  }

  insertTypeEnergie(energie: any): Observable<any> {
    return this.http.post(`${this.apiURl}/typeEnergie`, energie);
  }
}
