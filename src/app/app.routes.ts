import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { BackOfficeComponent } from './layouts/back-office/back-office.component';

export const routes: Routes = [
    {
      path: 'back',
      component: BackOfficeComponent,
      children: [
        {
          path: 'marque',
          loadChildren:
            () => import('./pages/page-back-offiche.routes').then((m) => m.PagesBackOfficeRoutes)
        },
        {
          path: 'service',
          loadChildren:
            () => import('./pages/page-back-offiche.routes').then((m) => m.PagesBackOfficeServicesRoutes)
        },
        {
          path: 'prestation',
          loadChildren:
            () => import('./pages/page-back-offiche.routes').then((m) => m.PagesBackOfficePrestationsRoutes)
        },
        {
          path: 'profil',
          loadChildren:
            () => import('./pages/page-back-office.routes').then((m) => m.PagesBackOfficeProfilRoutes)
        },
        {
          path: 'poste',
          loadChildren:
            () => import('./pages/page-back-office.routes').then((m) => m.PagesBackOfficePosteRoutes)
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
