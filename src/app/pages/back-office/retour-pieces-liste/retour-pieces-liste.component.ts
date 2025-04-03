import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { RetourPiecesService } from '../../../services/retour-pieces/retour-pieces.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { BadgeStatusComponent } from '../../../components/badge-status/badge-status.component';

@Component({
  selector: 'app-retour-pieces-liste',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    BadgeStatusComponent
  ],
  templateUrl: './retour-pieces-liste.component.html',
  styleUrl: './retour-pieces-liste.component.scss'
})
export class RetourPiecesListeComponent implements OnInit, AfterViewInit {
  listeRetours: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ["dateRetour", "pieceId", "quantiteRetour", "motifRetour", "mecanicienId", "status", "actions"];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private readonly retourPieceService: RetourPiecesService
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
    this.retourPieceService.getRetoursPieces(this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.listeRetours = response.data;
      this.totalItems = response.totalItems;
      this.dataSource.data = this.listeRetours;

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  }

  validationRetourPiece(retourId: string): void {
    this.retourPieceService.validationRetourPiece(retourId).subscribe(() => {
      window.location.reload();
    });
  }
  refusRetourPiece(retourId: string): void {
    this.retourPieceService.refusRetourPiece(retourId).subscribe(() => {
      window.location.reload();
    });
  }
}
