import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { FormsModule } from '@angular/forms';
import { GestionStocksService, StockVirtuelMecanicien } from '../../../../services/gestion-stocks/gestion-stocks.service';
import { variableTest } from '../../../../../variables-test/variable';

@Component({
  selector: 'app-sortie-stocks-mecanicien',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  templateUrl: './sortie-stocks-mecanicien.component.html',
  styleUrl: './sortie-stocks-mecanicien.component.scss'
})
export class SortieStocksMecanicienComponent implements OnInit {
  mecanicienId: string = `${variableTest.mecanicien}`;
  listePieces: any[] = [];

  newSortie: StockVirtuelMecanicien = {
    dateStock: '',
    pieceId: '',
    quantiteEntree: 0,
    quantiteSortie: 0,
    mecanicienId: this.mecanicienId,
    motif: ''
  }

  constructor(
    private readonly gestionStockService: GestionStocksService
  ) {}

  ngOnInit(): void {
    this.loadListePiece();
  }

  loadListePiece(): void {

  }

  addSortieStocks(): void {
    if(this.checkDataSortie()) {
      this.gestionStockService.sortieStockMecanicien(this.newSortie).subscribe((response: any) => {
        this.newSortie = {
          pieceId: '',
          quantiteEntree: 0,
          quantiteSortie: 0,
          mecanicienId: this.mecanicienId,
          motif: ''
        };
      });
    }
  }

  checkDataSortie(): boolean {
    if(this.newSortie.pieceId && this.newSortie.quantiteSortie && this.newSortie.mecanicienId) {
      return true;
    }
    return false;
  }
}
