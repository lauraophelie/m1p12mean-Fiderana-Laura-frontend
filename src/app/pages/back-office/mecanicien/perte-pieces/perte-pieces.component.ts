import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { CommonModule } from '@angular/common';
import { BadgeStatusComponent } from '../../../../components/badge-status/badge-status.component';
import { variableTest } from '../../../../../variables-test/variable';
import { NotificationPerte, PertePiecesService } from '../../../../services/perte-pieces/perte-pieces.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-perte-pieces',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    BadgeStatusComponent
  ],
  templateUrl: './perte-pieces.component.html',
  styleUrl: './perte-pieces.component.scss'
})
export class PertePiecesComponent implements OnInit, AfterViewInit {
  mecanicienId: string = `${variableTest.mecanicien}`;
  listePertes: NotificationPerte[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ["datePerte", "pieceId", "quantitePerdue", "status", "actions"];
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
    this.pertePieceService.getPertesPiecesMecanicien(this.mecanicienId, this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.listePertes = response.data;
      this.totalItems = response.totalItems;
      this.dataSource.data = this.listePertes;

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  }
}
