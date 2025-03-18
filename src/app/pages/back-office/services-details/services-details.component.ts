import { ServicesGarageService } from './../../../services/services-garage/services-garage.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { ServiceGarage } from '../../../services/services-garage/services-garage.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

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
  detailsService: any = {};
  listePrestations: any = [];
  countPrestations: number | string = 0;
  serviceId: any = '';

  constructor(private readonly servicesGarageService: ServicesGarageService, private readonly route: ActivatedRoute) {}

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
      }
    });
  }
}
