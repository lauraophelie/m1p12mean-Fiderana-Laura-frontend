import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DemandesPiecesService } from '../../../../services/demandes-pieces/demandes-pieces.service';
import { MatPaginator } from '@angular/material/paginator';
import { variableTest } from '../../../../../variables-test/variable';
import { BadgeStatusComponent } from '../../../../components/badge-status/badge-status.component';
import { MaterialModule } from '../../../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demande-pieces',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    BadgeStatusComponent
  ],
  templateUrl: './demande-pieces.component.html',
  styleUrl: './demande-pieces.component.scss'
})
export class DemandePiecesComponent implements OnInit, AfterViewInit {
  mecanicienId: string = `${variableTest.mecanicien}`;
  listeDemandes: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ["dateDemande", "motifDemande", "status", "actions"];
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
  loadDemandePieces(): void {
    this.demandesPiecesService.getDemandePieceMecanicien(this.mecanicienId, this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.listeDemandes = response.data;
      this.totalItems = response.totalItems;
      this.dataSource.data = this.listeDemandes;

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  }
}
