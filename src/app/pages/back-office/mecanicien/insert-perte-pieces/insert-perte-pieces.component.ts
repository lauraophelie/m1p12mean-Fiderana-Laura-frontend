import { Component, OnInit } from '@angular/core';
import { variableTest } from '../../../../../variables-test/variable';
import { NotificationPerte, PertePiecesService } from '../../../../services/perte-pieces/perte-pieces.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';

@Component({
  selector: 'app-insert-perte-pieces',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule
  ],
  templateUrl: './insert-perte-pieces.component.html',
  styleUrl: './insert-perte-pieces.component.scss'
})
export class InsertPertePiecesComponent implements OnInit {
  idMecanicien: string = `${variableTest.mecanicien}`;
  newNotifPerte: NotificationPerte = {
    datePerte: '',
    explicationPerte: '',
    mecanicienId: this.idMecanicien,
    pieceId: '',
    quantitePerdue: ''
  }
  listePieces: any[] = [];

  constructor(
    private readonly reponsePerteService: PertePiecesService
  ) {}

  ngOnInit(): void {
    this.loadListePiece();
  }

  addNotifRetourPerte(): void {
    if(this.checkNotifPerteData()) {
      this.reponsePerteService.insertPertePiece(this.newNotifPerte).subscribe((response: any) => {
        this.newNotifPerte = {
          datePerte: '',
          explicationPerte: '',
          mecanicienId: this.idMecanicien,
          pieceId: '',
          quantitePerdue: ''
        }
      });
    }
  }

  checkNotifPerteData(): boolean {
    if(this.newNotifPerte.datePerte && this.newNotifPerte.explicationPerte && this.newNotifPerte.mecanicienId && this.newNotifPerte.pieceId && this.newNotifPerte.quantitePerdue) {
      return true;
    }
    return false;
  }

  loadListePiece(): void {

  }
}
