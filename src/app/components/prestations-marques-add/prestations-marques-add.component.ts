import { Component, OnInit } from '@angular/core';
import { PrestationMarque } from '../../services/prestations-marques/prestations-marques.service';
import { Prestation, PrestationsService } from '../../services/prestations/prestations.service';
import { Marque, MarqueService } from '../../services/marques/marque.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-prestations-marques-add',
  standalone: true,
  imports: [],
  templateUrl: './prestations-marques-add.component.html',
  styleUrl: './prestations-marques-add.component.scss'
})
export class PrestationsMarquesAddComponent implements OnInit {
  newPrestationMarque: PrestationMarque = {
    prestationId: '',
    marqueId: '',
    tarif: 0,
    dureeEstimee: 0
  };
  prestations: Prestation[] = [];
  marques: Marque[] = [];

  constructor(private readonly prestationService: PrestationsService, private readonly marqueService: MarqueService) {}

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

  
}
