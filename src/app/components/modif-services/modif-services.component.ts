import { ChangeDetectionStrategy, Component, Inject, inject, Input, OnInit } from '@angular/core';
import { ServicesGarageService } from '../../services/services-garage/services-garage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modif-services',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  templateUrl: './modif-services.component.html',
  styleUrl: './modif-services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModifServicesComponent implements OnInit {
  serviceId: string = '';
  detailsService: any = {}

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly serviceGarageService: ServicesGarageService
  ) {
    this.serviceId = data.serviceId;
  }

  ngOnInit(): void {
    this.loadDetailsServices();
  }

  loadDetailsServices(): void {
    this.serviceGarageService.getDetailsService(this.serviceId).subscribe((response: any) => {
      this.detailsService = response.data;
    });
  }

  updateService(): void {
    if(this.detailsService.nomService) {
      this.serviceGarageService.updateService(this.serviceId, this.detailsService).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
