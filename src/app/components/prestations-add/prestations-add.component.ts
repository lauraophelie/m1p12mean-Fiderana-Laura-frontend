import { Component, OnInit } from '@angular/core';
import { Prestation, PrestationsService } from '../../services/prestations/prestations.service';
import { ServiceGarage, ServicesGarageService } from '../../services/services-garage/services-garage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-prestations-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatOptionModule
  ],
  templateUrl: './prestations-add.component.html',
  styleUrl: './prestations-add.component.scss'
})
export class PrestationsAddComponent implements OnInit {
  newPrestation: Prestation = {
    nomPrestation: '',
    descriptionPrestation: '',
    serviceId: ''
  }
  services: ServiceGarage[] = [];

  constructor(private readonly prestationService: PrestationsService, private readonly serviceGarage: ServicesGarageService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loadServices(): void {
    this.serviceGarage.getServices().subscribe((response: any) => this.services = response.data);
  }

  addPrestation(): void {
    if(this.newPrestation.nomPrestation && this.newPrestation.serviceId) {
      this.prestationService.addPrestation(this.newPrestation).subscribe(() => {
        this.newPrestation = {
          nomPrestation: '',
          descriptionPrestation: '',
          serviceId: ''
        }
      });
    }
  }
}
