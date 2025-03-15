import { Routes } from "@angular/router";
import { MarqueVoitureComponent } from "./back-office/marque-voiture/marque-voiture.component";
import { ModeleVoitureComponent } from "./back-office/modele-voiture/modele-voiture.component";

export const PagesBackOfficeRoutes: Routes = [
  {
    path: '',
    component: MarqueVoitureComponent,
    data: {
      title: 'Marque',
      urls: [
        { title: 'Marque', url: '/marques' }
      ]
    }
  },
  {
    path: 'modele',
    component: ModeleVoitureComponent,
    data: {
      title: 'Modele',
      urls: [
        { title: 'Modeles', url: '/modeles' }
      ]
    }
  }
]