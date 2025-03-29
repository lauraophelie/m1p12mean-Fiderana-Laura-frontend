import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoituresService } from '../../services/voitures/voitures.service';
import { RendezVous, RendezVousService } from '../../services/rendez-vous/rendez-vous.service';
import { ServicesGarageService } from '../../services/services-garage/services-garage.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-rdv-client',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './add-rdv-client.component.html',
  styleUrl: './add-rdv-client.component.scss'
})
export class AddRdvClientComponent implements OnInit {
  clientId: string = '';
  newRdv: RendezVous = {
    dateRdv: '',
    heureRdv: '',
    clientId: this.clientId,
    voitureId: '',
    commentaire: '',
    services: []
  }
  listeServices: any[] = [];
  listeVoituresClient: any[] = [];

  constructor(
    private readonly voitureService: VoituresService,
    private readonly serviceGarageService: ServicesGarageService,
    private readonly rdvService: RendezVousService
  ) {}

  ngOnInit(): void {
    this.loadElements();
  }

  addRendezVous(): void {
    if(this.checkRendezVous()) {
      this.rdvService.insertRendezVous(this.newRdv).subscribe(() => {
        this.initNewRdv();
      })
    }
  }

  checkRendezVous(): boolean {
    if(this.newRdv.dateRdv && this.newRdv.heureRdv && this.clientId && this.newRdv.voitureId && this.newRdv.services.length > 0) {
      return true;
    }
    return false;
  }

  initNewRdv(): void {
    this.newRdv = {
      dateRdv: '',
      heureRdv: '',
      clientId: this.clientId,
      voitureId: '',
      commentaire: '',
      services: []
    }
  }

  loadElements(): void {
    forkJoin({
      services: this.serviceGarageService.getServices(),
      voitures: this.voitureService.getAllVoituresClient(this.clientId)
    }).subscribe({
      next: (response: any) => {
        this.listeServices = response.services.data;
        this.listeVoituresClient = response.voitures.data;
      }
    })
  }
}
