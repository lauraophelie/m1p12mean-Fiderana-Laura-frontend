import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PrestationMarque, PrestationsMarquesService } from '../../services/prestations-marques/prestations-marques.service';
import { Prestation, PrestationsService } from '../../services/prestations/prestations.service';
import { Marque, MarqueService } from '../../services/marques/marque.service';
import { forkJoin } from 'rxjs';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prestations-marques-add',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './prestations-marques-add.component.html',
  styleUrl: './prestations-marques-add.component.scss'
})
export class PrestationsMarquesAddComponent implements OnInit {
  newPrestationMarque: PrestationMarque[] = []
  prestations: Prestation[] = [];
  marques: Marque[] = [];

  constructor(
    private readonly prestationService: PrestationsService,
    private readonly marqueService: MarqueService,
    private readonly prestationMarqueService: PrestationsMarquesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadListePrestationsEtMarques();
  };

  loadListePrestationsEtMarques(): void {
    forkJoin({
      prestations: this.prestationService.getPrestations(),
      marques: this.marqueService.getMarques()
    }).subscribe({
      next: (response: any) => {
        this.prestations = response.prestations.data;
        this.marques = response.marques.data;
      }
    });
  };

  newPrestation: string = '';
  newMarque: string = '';
  newTarif: number = 0;
  newDureeEstimee: number = 0;

  addToPrestationMarque(): void {
    if (this.newPrestation && this.newMarque && this.newTarif !== null && this.newDureeEstimee !== null) {
      const selectedPrestation = this.prestations.find(prestation => prestation._id === this.newPrestation);
      const selectedMarque = this.marques.find(marque => marque._id === this.newMarque);

      const element: PrestationMarque = {
        prestationId: this.newPrestation,
        marqueId: this.newMarque,
        tarif: Number(this.newTarif),
        dureeEstimee: this.newDureeEstimee,
        nomPrestation: selectedPrestation?.nomPrestation,
        nomMarque: selectedMarque?.designationMarque
      }
      this.newPrestationMarque.push(element);
      this.resetForm();
    }
  }

  deleteFromPrestationMarque(index: number): void {
    this.newPrestationMarque.splice(index, 1);
    this.newPrestationMarque = [...this.newPrestationMarque];
    this.cdr.detectChanges();
  }

  trackByPrestation(index: number, item: PrestationMarque): string {
    return item.prestationId + '-' + item.marqueId;
  }

  resetForm(): void {
    this.newPrestation = '';
    this.newMarque = '';
    this.newTarif = 0;
    this.newDureeEstimee = 0;
  }

  addPrestationMarque(): void {
    if(this.newPrestationMarque.length > 0) {
      this.prestationMarqueService.addPrestationMarques(this.newPrestationMarque).subscribe(() => {
        this.newPrestationMarque = [];
      });
    }
  }
}
