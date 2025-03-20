import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrestationsService } from '../../services/prestations/prestations.service';

@Component({
  selector: 'app-modif-prestations',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  templateUrl: './modif-prestations.component.html',
  styleUrl: './modif-prestations.component.scss'
})
export class ModifPrestationsComponent implements OnInit {
  prestationId: string = '';
  detailsPrestation: any = {};

  ngOnInit(): void {
    this.loadDetailsPrestation();
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly servicePrestation: PrestationsService
  ) {
    this.prestationId = data.prestationId;
  }

  loadDetailsPrestation(): void {
    this.servicePrestation.getDetailsPrestation(this.prestationId).subscribe((response: any) => {
      this.detailsPrestation = response.data;
    });
  };

  updatePrestation(): void {
    if(this.detailsPrestation.nomPrestation && this.detailsPrestation.serviceId) {
      this.servicePrestation.updatePrestation(this.prestationId, this.detailsPrestation).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
