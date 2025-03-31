import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NotificationPerte, PertePiecesService } from '../../../services/perte-pieces/perte-pieces.service';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { BadgeStatusComponent } from '../../../components/badge-status/badge-status.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-perte-pieces-liste',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    BadgeStatusComponent
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
}
