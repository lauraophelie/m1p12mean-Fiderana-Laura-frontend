import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { GestionStocksService, GetEtatStocks } from '../../../services/gestion-stocks/gestion-stocks.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etat-stocks',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  templateUrl: './etat-stocks.component.html',
  styleUrl: './etat-stocks.component.scss'
})
export class EtatStocksComponent {
  filtreEtatStock: GetEtatStocks = {
    dateDebut: '',
    dateFin: ''
  };
  etatStocks: any[] = [];

  displayedColumns: string[] = ["pieceId", "quantiteInitiale", "quantiteEntree", "quantiteSortie", "quantiteRestante"];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private readonly gestionStockService: GestionStocksService
  ) {}

  getEtatStocks(): void {
    if(this.filtreEtatStock.dateDebut && this.filtreEtatStock.dateFin) {
      this.gestionStockService.getEtatStocks(this.filtreEtatStock).subscribe((response: any) => {
        this.etatStocks = response.data;
        this.filtreEtatStock.dateDebut = response.dateDebut;
        this.filtreEtatStock.dateFin = response.dateFin;
        this.dataSource.data = this.etatStocks;
      });
    }
  }
}
