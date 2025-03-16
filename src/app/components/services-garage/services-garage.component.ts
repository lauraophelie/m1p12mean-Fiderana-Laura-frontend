import { Component } from '@angular/core';
import { ServiceGarage, ServicesGarageService } from '../../services/services-garage/services-garage.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-services-garage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './services-garage.component.html',
  styleUrl: './services-garage.component.scss'
})
export class ServicesGarageComponent {
  newService: ServiceGarage = {
    nomService: '',
    descriptionService: ''
  };
  constructor(private readonly serviceGarageService: ServicesGarageService) {}

  addService(): void {
    if(this.newService.nomService) {
      this.serviceGarageService.addService(this.newService).subscribe(() => {
        this.newService = {
          nomService: '',
          descriptionService: ''
        }
      });
    }
  }
}
