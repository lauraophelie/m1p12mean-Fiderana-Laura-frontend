import { Component, OnInit, inject } from '@angular/core';
import { RetourPiece, RetourPiecesService } from '../../../../services/retour-pieces/retour-pieces.service';
import { variableTest } from '../../../../../variables-test/variable';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { GestionStocksService } from '../../../../services/gestion-stocks/gestion-stocks.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  private _snackBar = inject(MatSnackBar);
  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  constructor(
    private readonly retourPiecesServices: RetourPiecesService,
    private readonly gestionStockService: GestionStocksService
  ) {}
  ngOnInit(): void {
    this.loadListePiece();
  }
  addRetourPiece(): void {
    if(this.checkDataRetourPiece()) {
      this.retourPiecesServices.insertRetourPiece(this.newRetourPiece).subscribe((response: any) => {
        if(response.message) {
          this.openSnackBar(response.message);
        } else {
          this.newRetourPiece = {
            dateRetour: '',
            pieceId: '',
            quantiteRetour: 0,
            motifRetour: '',
            mecanicienId: this.idMecanicien
          }
        }
      });
    } else {
      this.openSnackBar("Veuillez remplir correctement le formulaire");
    }
  }
  checkDataRetourPiece(): boolean {
    if(this.newRetourPiece.pieceId && this.newRetourPiece.quantiteRetour && this.newRetourPiece.motifRetour && this.newRetourPiece.mecanicienId) {
      return true;
    }
    return false;
  }
  loadListePiece(): void {
    this.gestionStockService.getListePieceMecanicien(this.idMecanicien).subscribe((response: any) => {
      this.listePieces = response.data;
    });
  }
}
