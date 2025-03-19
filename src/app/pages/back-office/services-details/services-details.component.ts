import { ServicesGarageService } from './../../../services/services-garage/services-garage.service';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { ServiceGarage } from '../../../services/services-garage/services-garage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
  ],
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ServicesDetailsComponent implements OnInit {
  detailsService: any = {};
  listePrestations: any[] = [];
  countPrestations: number | string = 0;
  serviceId: string | any = '';

  currentPage = 1;
  itemsPerPage = 5;
  totalItems = 0;

  displayedColumns: string[] = ['nomPrestation', 'descriptionPrestation'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private readonly servicesGarageService: ServicesGarageService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.serviceId = this.route.snapshot.paramMap.get('serviceId');
    this.loadDetailsService();
  };

  loadDetailsService(): void {
    forkJoin({
      details: this.servicesGarageService.getDetailsService(this.serviceId),
      prestations: this.servicesGarageService.getPrestationsService(this.serviceId)
    }).subscribe({
      next: (response: any) => {
        this.detailsService = response.details.data;
        this.listePrestations = response.prestations.data;
        this.countPrestations = response.prestations.count;
        this.dataSource.data = this.listePrestations;
        this.table.renderRows();
      }
    });
  }

  goToDetailsPrestation(prestationId: string): void {
    this.router.navigate([`/back/prestation/liste/${prestationId}`]);
  }
}
