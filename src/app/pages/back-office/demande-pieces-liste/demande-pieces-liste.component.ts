import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DemandesPiecesService } from './../../../services/demandes-pieces/demandes-pieces.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { BadgeStatusComponent } from '../../../components/badge-status/badge-status.component';

@Component({
  selector: 'app-demande-pieces-liste',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    BadgeStatusComponent
  ],
  templateUrl: './demande-pieces-liste.component.html',
  styleUrl: './demande-pieces-liste.component.scss'
})
export class DemandePiecesListeComponent implements OnInit, AfterViewInit {
  listeDemandes: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ["dateDemande", "motifDemande", "mecanicienId", "status", "actions"];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private readonly demandesPiecesService: DemandesPiecesService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    this.loadDemandePieces();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  validationDemandePiece(demandeId: string): void {
    this.demandesPiecesService.validationDemandePiece(demandeId).subscribe((response: any) => {
      window.location.reload();
    });
  }

  refusDemandePiece(demandeId: string): void {
    this.demandesPiecesService.refusDemandePiece(demandeId).subscribe((response: any) => {
      window.location.reload();
    });
  }

  loadDemandePieces(): void {
    this.demandesPiecesService.getDemandePieces(this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.listeDemandes = response.data;
      this.totalItems = response.totalItems;
      this.dataSource.data = this.listeDemandes;

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  }
}
