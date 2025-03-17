import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { ServiceGarage, ServicesGarageService } from '../../../services/services-garage/services-garage.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-services-liste',
  standalone: true,
  imports: [
    MaterialModule,
    TablerIconsModule,
    MatTooltipModule
  ],
  templateUrl: './services-liste.component.html',
  styleUrl: './services-liste.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ServicesListeComponent implements OnInit {
  services: ServiceGarage[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ['nomService', 'descriptionService', 'actions'];
  detailsIcon = "solar:minimalistic-magnifer-zoom-in-outline"

  constructor(private readonly serviceGarageService: ServicesGarageService, private readonly router: Router) {}

  ngOnInit(): void {
    this.loadServices();
  };

  loadServices(): void {
    this.serviceGarageService.getServicesPages(this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.services = response.data;
      this.totalItems = response.totalItems;
    });
  };

  goToAddPage(): void {
    this.router.navigate(['/back/service']);
  }

  goToDetails(serviceId: string): void {
    this.router.navigate([`/back/service/liste/${serviceId}`]);
  }

  nextPage(): void {
    if(this.currentPage < Math.ceil(this.totalItems / this.itemsPerPage)) {
      this.currentPage++;
      this.loadServices();
    }
  };

  previousPage(): void {
    this.currentPage--;
    this.loadServices();
  };
}
