import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PrestationsMarquesService } from '../../services/prestations-marques/prestations-marques.service';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modif-prestations-marques',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './modif-prestations-marques.component.html',
  styleUrl: './modif-prestations-marques.component.scss'
})
export class ModifPrestationsMarquesComponent implements OnInit {
  id: string = '';
  details: any = {}

  ngOnInit(): void {
    this.loadDetails();
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly servicePrestationMarque: PrestationsMarquesService
  ) {
    this.id = data.id;
  }

  loadDetails(): void {
    this.servicePrestationMarque.getDetailsPrestationMarque(this.id).subscribe((response: any) => {
      this.details = response.data;
    });
  };

  updatePrestationMarque(): void {
    if(this.details.tarif > 0 && this.details.dureeEstimee > 0) {
      this.servicePrestationMarque.updatePrestationMarque(this.id, this.details).subscribe(() => {
        window.location.reload();
      });
    }
  }
}
