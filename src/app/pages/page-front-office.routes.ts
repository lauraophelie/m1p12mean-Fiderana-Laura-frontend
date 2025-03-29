import { Routes } from "@angular/router";
import { InfosVoitureClientComponent } from "./front-office/infos-voiture-client/infos-voiture-client.component";
import { VoituresClientComponent } from "./front-office/voitures-client/voitures-client.component";
import { AccueilClientComponent } from "./front-office/accueil-client/accueil-client.component";
import { RdvsClientComponent } from "./front-office/rdvs-client/rdvs-client.component";

export const PagesFrontOfficeRoutes: Routes = [
  {
    path: '',
    component: AccueilClientComponent
  }
];

export const PagesFrontOfficeVoituresRoutes: Routes = [
  {
    path: '',
    component: VoituresClientComponent
  },
  {
    path: 'insert',
    component: InfosVoitureClientComponent
  },
];

export const PagesFrontOfficeRdvRoutes: Routes = [
  {
    path: '',
    component: RdvsClientComponent
  }
]