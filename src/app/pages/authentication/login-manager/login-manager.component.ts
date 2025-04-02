import { Component } from '@angular/core';
import {  FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router , RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AuthentificationService } from '../../../services/authentification/authentification.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-manager',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule,NgIf],
  templateUrl: './login-manager.component.html',
  styleUrl: './login-manager.component.scss'
})
export class LoginManagerComponent {
  newAuth={mail:'',mdp:'',profil:'manager'};
  errorMessage: string = ''; // Ajout d'une variable pour stocker l'erreur


    constructor(private readonly router: Router, private readonly authentificationService: AuthentificationService) {}

  submit() {
    // alert(JSON.stringify(this.newAuth, null, 2));
    this.authentificationService.authentificate(this.newAuth).subscribe({
      next: (response) => {
      alert(response)
        sessionStorage.setItem('token', response.accessToken);
        this.router.navigate(['/dashboard']); 
      },
      error: (err) => {
        console.error('Échec de la connexion:', err);
        this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
      }
    });
  }
}
