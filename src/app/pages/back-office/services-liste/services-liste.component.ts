import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { ServiceGarage, ServicesGarageService } from '../../../services/services-garage/services-garage.service';

@Component({
  selector: 'app-services-liste',
  standalone: true,
  imports: [
    MaterialModule
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

  constructor(private readonly serviceGarageService: ServicesGarageService) {}

  ngOnInit(): void {
    this.loadServices();
  };

  loadServices(): void {
    this.serviceGarageService.getServicesPages(this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.services = response.data;
      this.totalItems = response.totalItems;
    });
  };

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
