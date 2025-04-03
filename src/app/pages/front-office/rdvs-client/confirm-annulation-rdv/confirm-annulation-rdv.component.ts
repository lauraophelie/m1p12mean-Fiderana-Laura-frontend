import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RendezVousService } from '../../../../services/rendez-vous/rendez-vous.service';

@Component({
  selector: 'app-confirm-annulation-rdv',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  templateUrl: './confirm-annulation-rdv.component.html',
  styleUrl: './confirm-annulation-rdv.component.scss'
})
export class ConfirmAnnulationRdvComponent {
  rdvId: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly rdvService: RendezVousService
  ) {
    this.rdvId = data.rdvId;
  }
  annulationRdvClient(): void {
    if(this.rdvId) {
      this.rdvService.annulationRendezVous(this.rdvId).subscribe((response: any) => {
        window.location.reload();
      })
    }
  }
}
