import { Component, OnInit, inject } from '@angular/core';
import { variableTest } from '../../../../../variables-test/variable';
import { NotificationPerte, PertePiecesService } from '../../../../services/perte-pieces/perte-pieces.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { GestionStocksService } from '../../../../services/gestion-stocks/gestion-stocks.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  private _snackBar = inject(MatSnackBar);
  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  constructor(
    private readonly reponsePerteService: PertePiecesService,
    private readonly gestionStockService: GestionStocksService
  ) {}

  ngOnInit(): void {
    this.loadListePiece();
  }

  addNotifRetourPerte(): void {
    if(this.checkNotifPerteData()) {
      this.reponsePerteService.insertPertePiece(this.newNotifPerte).subscribe((response: any) => {
        if(response.message) {
          this.openSnackBar(response.message);
        } else {
          this.newNotifPerte = {
            datePerte: '',
            explicationPerte: '',
            mecanicienId: this.idMecanicien,
            pieceId: '',
            quantitePerdue: ''
          }
        }
      });
    } else {
      this.openSnackBar("Veuillez remplir correctement le formulaire");
    }
  }

  checkNotifPerteData(): boolean {
    if(this.newNotifPerte.datePerte && this.newNotifPerte.explicationPerte && this.newNotifPerte.mecanicienId && this.newNotifPerte.pieceId && this.newNotifPerte.quantitePerdue) {
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
