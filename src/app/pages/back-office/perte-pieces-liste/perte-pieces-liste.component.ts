import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { NotificationPerte, PertePiecesService } from '../../../services/perte-pieces/perte-pieces.service';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { BadgeStatusComponent } from '../../../components/badge-status/badge-status.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ReponsePerteDialogComponent } from './reponse-perte-dialog/reponse-perte-dialog.component';

@Component({
  selector: 'app-perte-pieces-liste',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    BadgeStatusComponent,
    ReponsePerteDialogComponent
  ],
  templateUrl: './perte-pieces-liste.component.html',
  styleUrl: './perte-pieces-liste.component.scss'
})
export class PertePiecesListeComponent implements OnInit, AfterViewInit {
  listePertes: NotificationPerte[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ["datePerte", "mecanicienId", "pieceId", "quantitePerdue", "status", "actions"];
  dataSource = new MatTableDataSource<NotificationPerte>();

  constructor(
    private readonly pertePieceService: PertePiecesService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    this.loadPertesPieces();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadPertesPieces(): void {
    this.pertePieceService.getPertesPieces(this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.listePertes = response.data;
      this.totalItems = response.totalItems;
      this.dataSource.data = this.listePertes;

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  }

  validationPertePiece(perteId: string): void {
    this.pertePieceService.validationPerte(perteId).subscribe(() => {
      window.location.reload();
    });
  }

  selectedPerte: string | null = null;
  readonly popup = inject(MatDialog);
  envoiReponseRefus(perteId: string): void {
    this.selectedPerte = perteId;
    this.popup.open(ReponsePerteDialogComponent, {
      data: {
        perteId: this.selectedPerte
      }
    });
  }
}
