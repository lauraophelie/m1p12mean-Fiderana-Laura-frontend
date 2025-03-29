import { Voiture } from './../../services/voitures/voitures.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoituresService } from '../../services/voitures/voitures.service';
import { ElementsVoitureService } from '../../services/voitures/elements-voiture.service';
import { MaterialModule } from '../../material.module';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-infos-voitures-insert',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  templateUrl: './infos-voitures-insert.component.html',
  styleUrl: './infos-voitures-insert.component.scss'
})
export class InfosVoituresInsertComponent implements OnInit {
  newInfosVoiture: Voiture = {
    immatriculation: '',
    marqueId: '',
    modeleId: '',
    categorieVoitureId: '',
    typeEnergieId: '',
    boiteVitesseId: '',
    clientId: '',
    anneeFabrication: '',
    remarques: '',
    images: []
  };
  listeBoiteVitesse: any[] = [];
  listeCategorieVoiture: any[] = [];
  listeTypeEnergie: any[] = [];

  constructor(
    private readonly voitureService: VoituresService,
    private readonly elementsVoitureService: ElementsVoitureService
  ) {}
  ngOnInit(): void {
    this.loadElementsVoiture();
  }

  loadElementsVoiture(): void {
    forkJoin({
      vitesse: this.elementsVoitureService.getVitesses(),
      categories: this.elementsVoitureService.getCategoriesVoiture(),
      energies: this.elementsVoitureService.getTypeEnergies()
    }).subscribe({
      next: (response: any) => {
        this.listeBoiteVitesse = response.vitesse.data;
        this.listeCategorieVoiture = response.categories.data;
        this.listeTypeEnergie = response.energies.data;
      }
    });
  };

  addInfosVoiture(): void {
    if(this.checkInfosVoiture()) {
      const formData = new FormData();

      formData.append('immatriculation', this.newInfosVoiture.immatriculation);
      formData.append('marqueId', this.newInfosVoiture.marqueId);
      formData.append('modeleId', this.newInfosVoiture.modeleId);
      formData.append('categorieVoitureId', this.newInfosVoiture.categorieVoitureId);
      formData.append('typeEnergieId', this.newInfosVoiture.typeEnergieId);
      formData.append('boiteVitesseId', this.newInfosVoiture.boiteVitesseId);

      if(this.newInfosVoiture.anneeFabrication) {
        formData.append('anneeFabrication', this.newInfosVoiture.anneeFabrication);
      }
      if(this.newInfosVoiture.remarques) {
        formData.append('remarques', this.newInfosVoiture.remarques);
      }
      if(this.newInfosVoiture.images && this.newInfosVoiture.images.length > 0) {
        for(let i = 0; i < this.newInfosVoiture.images.length; i++) {
          formData.append('images', this.newInfosVoiture.images[i]);
        }
      }
      this.voitureService.insertInfosVoiture(formData).subscribe(() => {
        this.initNewInfosVoiture();
      });
    }
  }

  checkInfosVoiture(): boolean {
    if(
      this.newInfosVoiture.immatriculation &&
      this.newInfosVoiture.marqueId &&
      this.newInfosVoiture.modeleId &&
      this.newInfosVoiture.categorieVoitureId &&
      this.newInfosVoiture.typeEnergieId &&
      this.newInfosVoiture.boiteVitesseId &&
      this.newInfosVoiture.clientId
    ) {
      return true;
    }
    return false;
  }

  initNewInfosVoiture(): void {
    this.newInfosVoiture = {
      immatriculation: '',
      marqueId: '',
      modeleId: '',
      categorieVoitureId: '',
      typeEnergieId: '',
      boiteVitesseId: '',
      clientId: '',
      anneeFabrication: '',
      images: [],
      remarques: ''
    };
  };
}
