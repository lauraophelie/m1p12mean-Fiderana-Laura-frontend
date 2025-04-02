import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { BackOfficeComponent } from './layouts/back-office/back-office.component';
import { FrontOfficeComponent } from './layouts/front-office/front-office.component';
import { MecanicienBackOfficeComponent } from './layouts/back-office/mecanicien/mecanicien-back-office/mecanicien-back-office.component';

export const routes: Routes = [
    {
      path: 'front',
      component: FrontOfficeComponent,
      children: [
        {
          path: 'home',
          loadChildren:
            () => import('./pages/page-front-office.routes').then((m) => m.PagesFrontOfficeRoutes)
        },
        {
          path: 'voitures',
          loadChildren:
            () => import('./pages/page-front-office.routes').then((m) => m.PagesFrontOfficeVoituresRoutes)
        },
        {
          path: 'rdv',
          loadChildren:
            () => import('./pages/page-front-office.routes').then((m) => m.PagesFrontOfficeRdvRoutes)
        }
      ]
    },
    {
      path: 'back',
      component: BackOfficeComponent,
      children: [
        {
          path: 'marque',
          loadChildren:
            () => import('./pages/page-back-office.routes').then((m) => m.PagesBackOfficeRoutes)
        },
        {
          path: 'service',
          loadChildren:
            () => import('./pages/page-back-office.routes').then((m) => m.PagesBackOfficeServicesRoutes)
        },
        {
          path: 'prestation',
          loadChildren:
            () => import('./pages/page-back-office.routes').then((m) => m.PagesBackOfficePrestationsRoutes)
        },
        {
          path: 'piece',
          loadChildren:
            () => import('./pages/page-back-office.routes').then((m) => m.PagesBackOfficePiecesRoutes)
        }
      ]
    },
    {
      path: 'meca',
      component: MecanicienBackOfficeComponent,
      children: [
        {
          path: 'piece',
          loadChildren:
            () => import('./pages/page-mecanicien-back-office.route').then((m) => m.PagesMecanicienBackOfficeRoutes)
        }
      ]
    },
    {
        path: '',
        component: FullComponent,
        children: [
          {
            path: '',
            redirectTo: '/dashboard',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('./pages/pages.routes').then((m) => m.PagesRoutes),
          },
          {
            path: 'ui-components',
            loadChildren: () =>
              import('./pages/ui-components/ui-components.routes').then(
                (m) => m.UiComponentsRoutes
              ),
          },
          {
            path: 'extra',
            loadChildren: () =>
              import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
          },
        ],
      },
      {
        path: '',
        component: BlankComponent,
        children: [
          {
            path: 'authentication',
            loadChildren: () =>
              import('./pages/authentication/authentication.routes').then(
                (m) => m.AuthenticationRoutes
              ),
          },
        ],
      },
      {
        path: '**',
        redirectTo: 'authentication/error',
      },
];
