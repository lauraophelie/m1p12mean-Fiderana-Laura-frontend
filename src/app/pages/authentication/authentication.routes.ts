import { Routes } from '@angular/router';

import { AppSideLoginComponent } from './side-login/side-login.component';
import { AppSideRegisterComponent } from './side-register/side-register.component';
import { AjoutEmployeComponent } from './ajout-employe/ajout-employe.component';
import { InscriptionClientComponent } from './inscription-client/inscription-client.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { LoginMecanicienComponent } from './login-mecanicien/login-mecanicien.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: AppSideLoginComponent,
      },
      {
        path: 'register',
        component: AppSideRegisterComponent,
      },
      {
        path: 'ajoutEmploye',
        component: AjoutEmployeComponent,
      },
      {
        path: 'inscriClient',
        component: InscriptionClientComponent,
      },
      {
        path: 'loginClient',
        component: LoginClientComponent,
      },
      {
        path: 'loginMeca',
        component: LoginMecanicienComponent,
      },
      {
        path: 'loginMana',
        component: LoginManagerComponent,
      },
    ],
  },
];
