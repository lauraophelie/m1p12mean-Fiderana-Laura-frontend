import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators , FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router , RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AuthentificationService } from '../../../services/authentification/authentification.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login-mecanicien',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule,NgIf],
  templateUrl: './login-mecanicien.component.html',
  styleUrl: './login-mecanicien.component.scss'
})
export class LoginMecanicienComponent {
 newAuth={mail:'',mdp:'',profil:'mecanicien'};
   errorMessage: string = ''; // Ajout d'une variable pour stocker l'erreur
 
 
     constructor(private readonly router: Router, private readonly authentificationService: AuthentificationService) {}
 
   submit() {
     // alert(JSON.stringify(this.newAuth, null, 2));
     this.authentificationService.authentificate(this.newAuth).subscribe({
       next: (response) => {
       alert(response)
         sessionStorage.setItem('token', response.accessToken);
         this.router.navigate(['//back/service/liste']); 
       },
       error: (err) => {
         console.error('Échec de la connexion:', err);
         this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
       }
     });
   }
}
