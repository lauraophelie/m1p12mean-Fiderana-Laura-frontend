import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation, inject, viewChild } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { ServiceGarage, ServicesGarageService } from '../../../services/services-garage/services-garage.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModifServicesComponent } from '../../../components/modif-services/modif-services.component';

@Component({
  selector: 'app-services-liste',
  standalone: true,
  imports: [
    MaterialModule,
    TablerIconsModule,
    MatTooltipModule,
    FormsModule,
    CommonModule,
    ModifServicesComponent
  ],
  templateUrl: './services-liste.component.html',
  styleUrl: './services-liste.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesListeComponent implements OnInit, AfterViewInit {
  services: ServiceGarage[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ['nomService', 'descriptionService', 'actions'];
  detailsIcon = "solar:minimalistic-magnifer-zoom-in-outline"
  dataSource = new MatTableDataSource<ServiceGarage>();
  selectedServiceId: string | null = null;

  constructor(
    private readonly serviceGarageService: ServicesGarageService,
    private readonly router: Router
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<ServiceGarage>;

  readonly popup = inject(MatDialog);

  selectServiceForModification(serviceId: string): void {
    this.selectedServiceId = serviceId;
    this.popup.open(ModifServicesComponent, {
      data: {
        serviceId: this.selectedServiceId
      }
    });
  }

  ngOnInit(): void {
    this.loadServices();
  };

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadServices(): void {
    this.serviceGarageService.getServicesPages(this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.services = response.data;
      this.totalItems = response.totalItems;
      this.dataSource.data = this.services;

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  };

  goToAddPage(): void {
    this.router.navigate(['/back/service']);
  }

  goToDetails(serviceId: string): void {
    this.router.navigate([`/back/service/liste/${serviceId}`]);
  }
}
