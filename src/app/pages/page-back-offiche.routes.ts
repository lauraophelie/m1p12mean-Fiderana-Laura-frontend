import { Routes } from "@angular/router";
import { MarqueVoitureComponent } from "./back-office/marque-voiture/marque-voiture.component";
import { ModeleVoitureComponent } from "./back-office/modele-voiture/modele-voiture.component";
import { ServicesAjoutComponent } from './back-office/services-ajout/services-ajout.component';

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
];

export const PagesBackOfficeServicesRoutes: Routes = [
  {
    path: '',
    component: ServicesAjoutComponent,
    data: {
      title: 'Services',
      urls: [
        { title: 'Services', url: '/services/ajout' }
      ]
    }
  }
];