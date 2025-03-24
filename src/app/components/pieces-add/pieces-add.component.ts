import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { Piece, PiecesService } from '../../services/pieces/pieces.service';
import { CategoriePiece, CategoriePiecesService } from '../../services/categorie-pieces/categorie-pieces.service';
import { Modele, ModeleService } from '../../services/modeles/modele.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-pieces-add',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  templateUrl: './pieces-add.component.html',
  styleUrl: './pieces-add.component.scss'
})
export class PiecesAddComponent implements OnInit {
  newPiece: Piece = {
    nomPiece: '',
    categoriePieceId: '',
    reference: '',
    seuilAlerte: 0,
    prixUnitaire: 0,
    modelesCompatibles: []
  };
  categoriesPieces: CategoriePiece[] = [];
  modelesVoitures: Modele[] = [];

  constructor(
    private readonly categoriePieceService: CategoriePiecesService,
    private readonly pieceService: PiecesService,
    private readonly modeleService: ModeleService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    forkJoin({
      categories: this.categoriePieceService.getCategories(),
      modeles: this.modeleService.getModeles()
    }).subscribe({
      next: (response: any) => {
        this.categoriesPieces = response.categories.data;
        this.modelesVoitures = response.modeles.data;
      }
    });
  };

  addPiece(): void {
    if(this.checkPiece()) {
      this.pieceService.addPiece(this.newPiece).subscribe(() => {
        this.initNewPiece();
      });
    }
  }

  checkPiece(): boolean {
    if(this.newPiece.nomPiece && this.newPiece.categoriePieceId && this.newPiece.reference && this.newPiece.seuilAlerte && this.newPiece.prixUnitaire) {
      return true;
    }
    return false;
  };

  initNewPiece(): void {
    this.newPiece = {
      nomPiece: '',
      categoriePieceId: '',
      reference: '',
      seuilAlerte: 0,
      prixUnitaire: 0,
      modelesCompatibles: []
    };
  };
}
