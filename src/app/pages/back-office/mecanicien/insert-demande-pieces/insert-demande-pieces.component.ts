import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { PiecesService } from '../../../../services/pieces/pieces.service';
import { DemandePiece, DemandesPiecesService, DetailsDemandePiece } from '../../../../services/demandes-pieces/demandes-pieces.service';
import { variableTest } from '../../../../../variables-test/variable';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-insert-demande-pieces',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  templateUrl: './insert-demande-pieces.component.html',
  styleUrl: './insert-demande-pieces.component.scss'
})
export class InsertDemandePiecesComponent implements OnInit {
  listePieces: any[] = [];
  idMecanicien: string = `${variableTest.mecanicien}`;
  newDemandePiece: DemandePiece = {
    dateDemande: '',
    motifDemande: '',
    mecanicienId: this.idMecanicien,
    details: []
  };

  private _snackBar = inject(MatSnackBar);
  openSnackBar(message: string, action: string | 'Fermer') {
    this._snackBar.open(message, action);
  }

  constructor(
    private readonly pieceService: PiecesService,
    private readonly demandePieceService: DemandesPiecesService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadListePieces();
  }

  newPieceId: string = '';
  newQuantite: number = 0;

  addToDetailsDemandePiece(): void {
    if(this.newPieceId && this.newQuantite > 0) {
      const selectedPiece = this.listePieces.find(piece => piece._id === this.newPieceId);
      const element: DetailsDemandePiece = {
        demandeId: '',
        pieceId: this.newPieceId,
        quantite: this.newQuantite,
        nomPiece: selectedPiece?.nomPiece + ' (' + selectedPiece?.reference + ')'
      };
      this.newDemandePiece.details.push(element);
      this.resetForm();
    }
  };

  deleteFromDetailsDemandePiece(index: number): void {
    this.newDemandePiece.details.splice(index, 1);
    this.newDemandePiece.details = [...this.newDemandePiece.details];
    this.cdr.detectChanges();
  }

  trackByDetails(index: number, item: DetailsDemandePiece): string {
    return item.pieceId + '-' + item.quantite + '-' + index;
  }

  resetForm(): void {
    this.newPieceId = '';
    this.newQuantite = 0;
  }

  insertDemandePiece(): void {
    if(this.checkDemandePiece()) {
      this.demandePieceService.addDemandePiece(this.newDemandePiece).subscribe((response: any) => {
          this.newDemandePiece = {
            dateDemande: '',
            motifDemande: '',
            mecanicienId: this.idMecanicien,
            details: []
          };
      });
    }
  }

  checkDemandePiece(): boolean {
    if(this.newDemandePiece.motifDemande && this.newDemandePiece.mecanicienId && this.newDemandePiece.details.length > 0) {
      return true;
    }
    return false;
  }

  loadListePieces(): void {
    this.pieceService.getPieces().subscribe((response: any) => {
      this.listePieces = response.data;
    });
  }
}
