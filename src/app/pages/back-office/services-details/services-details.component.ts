import { ServicesGarageService } from './../../../services/services-garage/services-garage.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { ServiceGarage } from '../../../services/services-garage/services-garage.service';

@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [
    MaterialModule,
  ],
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ServicesDetailsComponent implements OnInit {
  detailsService = {};
  listePrestations = [];
  countPrestations: number | string = 0;
  serviceId = '';

  constructor(private readonly servicesGarageService: ServicesGarageService) {}

  ngOnInit(): void {
    this.loadDetailsService();
    this.loadPrestationsService();
  };

  loadPrestationsService(): void {
    this.servicesGarageService.getPrestationsService(this.serviceId).subscribe((response: any) => {
      this.listePrestations = response.data;
      this.countPrestations = response.count;
    });
  };

  loadDetailsService(): void {
    this.servicesGarageService.getDetailsService(this.serviceId).subscribe((response: any) => {
      this.detailsService = response.data;
    });
  }
}
