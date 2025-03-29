import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { VoituresService } from '../../../services/voitures/voitures.service';
import { MatPaginator } from '@angular/material/paginator';
import { ServiceGarage } from '../../../services/services-garage/services-garage.service';
import { variableTest } from '../../../../variables-test/variable';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-voitures-client',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
  ],
  templateUrl: './voitures-client.component.html',
  styleUrl: './voitures-client.component.scss'
})
export class VoituresClientComponent implements OnInit, AfterViewInit {
  clientId: string = `${variableTest.client}`;
  listeVoitures: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ["immatriculation", "marqueId", "modeleId", "categorieVoitureId", "typeEnergieId", "boiteVitesseId", "actions"];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private readonly voitureService: VoituresService,
    private router: Router
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<ServiceGarage>;

  ngOnInit(): void {
    this.loadVoitures();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadVoitures(): void {
    this.voitureService.getVoituresClient(this.clientId, this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.listeVoitures = response.data;
      this.totalItems = response.totalItems;
      this.dataSource.data = this.listeVoitures;

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  }

  goToAddPage(): void {
    this.router.navigate(['/front/voitures/insert']);
  }
}
