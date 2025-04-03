import { PiecesAjoutComponent } from './back-office/pieces-ajout/pieces-ajout.component';
import { Routes } from "@angular/router";
import { MarqueVoitureComponent } from "./back-office/marque-voiture/marque-voiture.component";
import { ModeleVoitureComponent } from "./back-office/modele-voiture/modele-voiture.component";
import { ServicesAjoutComponent } from './back-office/services-ajout/services-ajout.component';
import { ServicesListeComponent } from "./back-office/services-liste/services-liste.component";
import { ServicesDetailsComponent } from "./back-office/services-details/services-details.component";
import { PrestationsAddFormComponent } from "./back-office/prestations-add-form/prestations-add-form.component";
import { PrestationsMarquesAddComponent } from "../components/prestations-marques-add/prestations-marques-add.component";
import { FormProfilComponent } from "./back-office/profil/form-profil/form-profil.component";
import { FormPosteComponent } from "./back-office/poste/form-poste/form-poste.component";
import { ListeProfilComponent } from "./back-office/profil/liste-profil/liste-profil.component";
import { ListePosteComponent } from "./back-office/poste/liste-poste/liste-poste.component";import { PrestationsListeComponent } from "./back-office/prestations-liste/prestations-liste.component";
import { PrestationsDetailsComponent } from "./back-office/prestations-details/prestations-details.component";
import { EtatStocksComponent } from './back-office/etat-stocks/etat-stocks.component';
import { RetourPiecesListeComponent } from './back-office/retour-pieces-liste/retour-pieces-liste.component';
import { PertePiecesListeComponent } from './back-office/perte-pieces-liste/perte-pieces-liste.component';
import { DemandePiecesListeComponent } from './back-office/demande-pieces-liste/demande-pieces-liste.component';
import { AjoutEmployeComponent } from './authentication/ajout-employe/ajout-employe.component';


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
  },
  {
    path: 'liste',
    component: ServicesListeComponent,
    data: {
      title: 'Services',
      urls: [
        { title: 'Services', url: '/services/liste' }
      ]
    }
  },
  {
    path: 'liste/:serviceId',
    component: ServicesDetailsComponent
  }
];

export const PagesBackOfficePrestationsRoutes: Routes = [
  {
    path: '',
    component: PrestationsAddFormComponent
  },
  {
    path: 'prestationMarque',
    component: PrestationsMarquesAddComponent
  },
  {
    path: 'liste',
    component: PrestationsListeComponent
  },
  {
    path: 'liste/:prestationId',
    component: PrestationsDetailsComponent
  }
];

export const PagesBackOfficePiecesRoutes: Routes = [
  {
    path: '',
    component: PiecesAjoutComponent
  },
  {
    path: 'stocks/etat',
    component: EtatStocksComponent
  },
  {
    path: 'retours',
    component: RetourPiecesListeComponent
  },
  {
    path: 'pertes',
    component: PertePiecesListeComponent
  },
  {
    path: 'demandes',
    component: DemandePiecesListeComponent
  }
];

export const PagesBackOfficeInscriptionRoutes: Routes = [
  {
    path: '',
    component: PrestationsAddFormComponent
  },
  {
    path: 'prestationMarque',
    component: PrestationsMarquesAddComponent
  }
];


export const PagesBackOfficeProfilRoutes: Routes = [
  {
    path: '',
    component: ListeProfilComponent
  },
  {
    path: 'formProfil',
    component: FormProfilComponent
  }
];

export const PagesBackOfficePosteRoutes: Routes = [
  {
    path: '',
    component: ListePosteComponent
  },
  {
    path: 'formPoste',
    component: FormPosteComponent
  }
];

export const PagesBackOfficeEmployesRoutes: Routes = [
  {
    path: '',
    component: ListePosteComponent
  },
  {
    path: 'ajoutEmploye',
    component: AjoutEmployeComponent
  }
];
