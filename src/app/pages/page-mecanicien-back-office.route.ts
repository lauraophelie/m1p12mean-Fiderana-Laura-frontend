import { Routes } from "@angular/router";
import { DemandePiecesComponent } from "./back-office/mecanicien/demande-pieces/demande-pieces.component";
import { InsertDemandePiecesComponent } from "./back-office/mecanicien/insert-demande-pieces/insert-demande-pieces.component";
import { RetourPiecesComponent } from "./back-office/mecanicien/retour-pieces/retour-pieces.component";
import { InsertRetourPiecesComponent } from "./back-office/mecanicien/insert-retour-pieces/insert-retour-pieces.component";
import { PertePiecesComponent } from "./back-office/mecanicien/perte-pieces/perte-pieces.component";
import { InsertPertePiecesComponent } from "./back-office/mecanicien/insert-perte-pieces/insert-perte-pieces.component";
import { SortieStocksMecanicienComponent } from "./back-office/mecanicien/sortie-stocks-mecanicien/sortie-stocks-mecanicien.component";
import { StocksPiecesMecanicienComponent } from "./back-office/mecanicien/stocks-pieces-mecanicien/stocks-pieces-mecanicien.component";

export const PagesMecanicienBackOfficeRoutes: Routes = [
  {
    path: 'demande/liste',
    component: DemandePiecesComponent
  },
  {
    path: 'demande/insert',
    component: InsertDemandePiecesComponent
  },
  {
    path: 'retour/liste',
    component: RetourPiecesComponent
  },
  {
    path: 'retour/insert',
    component: InsertRetourPiecesComponent
  },
  {
    path: 'perte/liste',
    component: PertePiecesComponent
  },
  {
    path: 'perte/insert',
    component: InsertPertePiecesComponent
  },
  {
    path: 'stocks/sortie',
    component: SortieStocksMecanicienComponent
  },
  {
    path: 'stocks/etat',
    component: StocksPiecesMecanicienComponent
  }
];