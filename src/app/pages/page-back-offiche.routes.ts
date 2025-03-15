import { Routes } from "@angular/router";
import { MarqueVoitureComponent } from "./back-office/marque-voiture/marque-voiture.component";

export const PagesBackOfficeRoutes: Routes = [
  {
    path: '',
    component: MarqueVoitureComponent,
    data: {
      title: 'Marque',
      urls: [
        { title: 'Marque', url: '/marques'}
      ]
    }
  }
]