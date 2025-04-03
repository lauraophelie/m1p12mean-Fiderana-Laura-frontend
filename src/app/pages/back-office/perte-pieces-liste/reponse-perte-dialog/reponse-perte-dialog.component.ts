import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PertePiecesService, ReponsePerte } from '../../../../services/perte-pieces/perte-pieces.service';
import { variableTest } from '../../../../../variables-test/variable';

@Component({
  selector: 'app-reponse-perte-dialog',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  templateUrl: './reponse-perte-dialog.component.html',
  styleUrl: './reponse-perte-dialog.component.scss'
})
export class ReponsePerteDialogComponent {
  perteId: string = '';
  managerId: string = `${variableTest.manager}`;
  newReponsePerte: ReponsePerte = {
    perteId: this.perteId,
    motifRefus: '',
    managerId: this.managerId
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly pertePiecesService: PertePiecesService
  ) {
    this.perteId = data.perteId;
    this.newReponsePerte.perteId = data.perteId;
  }

  refusPertePiece(): void {
    if(this.newReponsePerte.perteId && this.newReponsePerte.motifRefus && this.newReponsePerte.managerId) {
      this.pertePiecesService.refusPertePiece(this.perteId, this.newReponsePerte).subscribe((response: any) => {
        this.newReponsePerte = {
          perteId: this.perteId,
          motifRefus: '',
          managerId: this.managerId
        };
        window.location.reload();
      });
    }
  }
}
