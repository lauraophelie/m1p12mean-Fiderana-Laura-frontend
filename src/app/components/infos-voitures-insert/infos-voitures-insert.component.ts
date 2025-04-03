import { Voiture } from './../../services/voitures/voitures.service';
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoituresService } from '../../services/voitures/voitures.service';
import { ElementsVoitureService } from '../../services/voitures/elements-voiture.service';
import { MaterialModule } from '../../material.module';
import { forkJoin } from 'rxjs';
import { MarqueService } from '../../services/marques/marque.service';
import { variableTest } from '../../../variables-test/variable';

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
export class InfosVoituresInsertComponent implements OnInit, OnDestroy {
  clientId: string = `${variableTest.client}`;
  newInfosVoiture: Voiture = {
    immatriculation: '',
    marqueId: '',
    modeleId: '',
    categorieVoitureId: '',
    typeEnergieId: '',
    boiteVitesseId: '',
    clientId: this.clientId,
    anneeFabrication: '',
    remarques: '',
    images: []
  };
  listeMarques: any[] = [];
  listeModeles: any[] = [];
  listeBoiteVitesse: any[] = [];
  listeCategorieVoiture: any[] = [];
  listeTypeEnergie: any[] = [];

  constructor(
    private readonly voitureService: VoituresService,
    private readonly elementsVoitureService: ElementsVoitureService,
    private readonly marqueService: MarqueService
  ) {}
  ngOnInit(): void {
    this.loadElementsVoiture();
  }

  loadElementsVoiture(): void {
    forkJoin({
      vitesse: this.elementsVoitureService.getVitesses(),
      categories: this.elementsVoitureService.getCategoriesVoiture(),
      energies: this.elementsVoitureService.getTypeEnergies(),
      marques: this.marqueService.getMarques()
    }).subscribe({
      next: (response: any) => {
        this.listeBoiteVitesse = response.vitesse.data;
        this.listeCategorieVoiture = response.categories.data;
        this.listeTypeEnergie = response.energies.data;
        this.listeMarques = response.marques.data;
      }
    });
  };

  loadModeleVoiture(): void {
    if (this.newInfosVoiture.marqueId) {
      this.marqueService.getListeModele(this.newInfosVoiture.marqueId).subscribe((response: any) => {
        this.listeModeles = response.data;
      });
    };
  };

  imageUrls: string[] = [];
  onFilesSelected(event: any): void {
    const files: FileList = event.target.files;

    if (files) {
      if (!Array.isArray(this.newInfosVoiture.images)) {
        this.newInfosVoiture.images = [];
      }
      Array.from(files).forEach(file => {
        this.newInfosVoiture.images?.push(file);
        const imageUrl = URL.createObjectURL(file);
        this.imageUrls.push(imageUrl);
      });
    }
  };

  removeImage(index: number): void {
    this.newInfosVoiture.images?.splice(index, 1);
    URL.revokeObjectURL(this.imageUrls[index]);
    this.imageUrls.splice(index, 1);
  }

  ngOnDestroy(): void {
    this.imageUrls.forEach(url => URL.revokeObjectURL(url));
  }

  addInfosVoiture(): void {
    if(this.checkInfosVoiture()) {
      const formData = new FormData();

      formData.append('immatriculation', this.newInfosVoiture.immatriculation);
      formData.append('marqueId', this.newInfosVoiture.marqueId);
      formData.append('modeleId', this.newInfosVoiture.modeleId);
      formData.append('categorieVoitureId', this.newInfosVoiture.categorieVoitureId);
      formData.append('typeEnergieId', this.newInfosVoiture.typeEnergieId);
      formData.append('boiteVitesseId', this.newInfosVoiture.boiteVitesseId);
      formData.append('clientId', this.clientId);

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
        window.location.reload();
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
      clientId: this.clientId,
      anneeFabrication: '',
      images: [],
      remarques: ''
    };
  };
}
