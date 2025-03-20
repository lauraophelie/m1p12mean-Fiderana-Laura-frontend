import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { PrestationsService } from '../../../services/prestations/prestations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModifPrestationsMarquesComponent } from '../../../components/modif-prestations-marques/modif-prestations-marques.component';

@Component({
  selector: 'app-prestations-details',
  standalone: true,
  imports: [
    MaterialModule,
    MatPaginatorModule,
    CommonModule,
    ModifPrestationsMarquesComponent
  ],
  templateUrl: './prestations-details.component.html',
  styleUrl: './prestations-details.component.scss'
})
export class PrestationsDetailsComponent implements OnInit, AfterViewInit {
  detailsPrestation: any = {};
  marquesPrestations: any[] = [];
  prestationId: string | any = '';

  currentPage = 1;
  itemsPerPage = 5;
  totalItems = 0;

  displayedColumns: string[] = ['marqueId', 'tarif', 'dureeEstimee', 'actions'];
  dataSource = new MatTableDataSource<any>();
  selectedPrestationMarque: string | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private readonly prestationService: PrestationsService,
    private readonly route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  readonly popup = inject(MatDialog);

  selectPrestationMarque(id: string): void {
    this.selectedPrestationMarque = id;
    this.popup.open(ModifPrestationsMarquesComponent, {
      data: {
        id: this.selectedPrestationMarque
      }
    })
  }

  ngOnInit(): void {
    this.prestationId = this.route.snapshot.paramMap.get('prestationId');
    this.loadDetailsPrestation();
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.itemsPerPage = event.pageSize;
    this.loadDetailsPrestation();
  };

  loadDetailsPrestation(): void {
    forkJoin({
      details: this.prestationService.getDetailsPrestation(this.prestationId),
      marquesPrestation: this.prestationService.getMarquesPrestation(this.prestationId, this.currentPage, this.itemsPerPage)
    }).subscribe({
      next: (response: any) => {
        this.detailsPrestation = response.details.data;
        this.totalItems = response.marquesPrestation.totalItems;
        this.marquesPrestations = response.marquesPrestation.data;

        this.dataSource.data = this.marquesPrestations;
        this.paginator.length = this.totalItems;
        this.table.renderRows();
        this.cdr.detectChanges();
      }
    });
  };

  goToDetailsService(serviceId: string): void {
    this.router.navigate([`/back/service/liste/${serviceId}`]);
  };
}
