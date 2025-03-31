import { Component, OnInit, ViewChild } from '@angular/core';
import { GestionStocksService, StockMecanicien } from '../../../../services/gestion-stocks/gestion-stocks.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { variableTest } from '../../../../../variables-test/variable';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';

@Component({
  selector: 'app-stocks-pieces-mecanicien',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './stocks-pieces-mecanicien.component.html',
  styleUrl: './stocks-pieces-mecanicien.component.scss'
})
export class StocksPiecesMecanicienComponent implements OnInit {
  idMecanicien: string = `${variableTest.mecanicien}`;
  stockMecanicien: StockMecanicien[] = [];

  displayedColumns: string[] = ["pieceId", "quantiteEntree", "quantiteSortie", "quantiteRestante"];
  dataSource = new MatTableDataSource<StockMecanicien>();

  @ViewChild(MatTable) table!: MatTable<StockMecanicien>;

  constructor(
    private readonly gestionStockService: GestionStocksService
  ) {}

  ngOnInit(): void {
    this.loadStockMecanicien();
  }

  loadStockMecanicien(): void {
    this.gestionStockService.getStockMecanicien(this.idMecanicien).subscribe((response: any) => {
      this.stockMecanicien = response.data;
      this.dataSource.data = this.stockMecanicien;
    });
  }
}
