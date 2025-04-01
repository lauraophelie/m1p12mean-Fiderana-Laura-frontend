import { Component, OnInit } from '@angular/core';
import { RetourPiece, RetourPiecesService } from '../../../../services/retour-pieces/retour-pieces.service';
import { variableTest } from '../../../../../variables-test/variable';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';

@Component({
  selector: 'app-insert-retour-pieces',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  templateUrl: './insert-retour-pieces.component.html',
  styleUrl: './insert-retour-pieces.component.scss'
})
export class InsertRetourPiecesComponent implements OnInit {
  idMecanicien: string = `${variableTest.mecanicien}`;
  newRetourPiece: RetourPiece = {
    dateRetour: '',
    pieceId: '',
    quantiteRetour: 0,
    motifRetour: '',
    mecanicienId: this.idMecanicien
  };
  listePieces: any[] = [];

  constructor(
    private readonly retourPiecesServices: RetourPiecesService
  ) {}

  ngOnInit(): void {
    this.loadListePiece();
  }

  addRetourPiece(): void {
    if(this.checkDataRetourPiece()) {
      this.retourPiecesServices.insertRetourPiece(this.newRetourPiece).subscribe(() => {
        this.newRetourPiece = {
          dateRetour: '',
          pieceId: '',
          quantiteRetour: 0,
          motifRetour: '',
          mecanicienId: this.idMecanicien
        }
      })
    }
  }

  checkDataRetourPiece(): boolean {
    if(this.newRetourPiece.pieceId && this.newRetourPiece.quantiteRetour && this.newRetourPiece.motifRetour && this.newRetourPiece.mecanicienId) {
      return true;
    }
    return false;
  }

  loadListePiece(): void {

  }
}
