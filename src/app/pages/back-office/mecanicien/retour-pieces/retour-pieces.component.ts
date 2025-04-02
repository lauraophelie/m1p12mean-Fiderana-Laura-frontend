import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { variableTest } from '../../../../../variables-test/variable';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RetourPiecesService } from '../../../../services/retour-pieces/retour-pieces.service';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { BadgeStatusComponent } from '../../../../components/badge-status/badge-status.component';

@Component({
  selector: 'app-retour-pieces',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    BadgeStatusComponent
  ],
  templateUrl: './retour-pieces.component.html',
  styleUrl: './retour-pieces.component.scss'
})
export class RetourPiecesComponent implements OnInit, AfterViewInit {
  mecanicienId: string = `${variableTest.mecanicien}`;
  listeRetours: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ["dateRetour", "pieceId", "quantiteRetour", "motifRetour", "status", "actions"];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private readonly retourPiecesService: RetourPiecesService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    this.loadRetourPieces();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadRetourPieces(): void {
    this.retourPiecesService.getRetoursPiecesMecanicien(this.mecanicienId, this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.listeRetours = response.data;
      this.totalItems = response.totalItems;
      this.dataSource.data = this.listeRetours;

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  }
}
