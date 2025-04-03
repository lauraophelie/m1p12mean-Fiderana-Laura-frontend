import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../../services/clients/client.service';

interface option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-inscription-client',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './inscription-client.component.html',
  styleUrl: './inscription-client.component.scss'
})
export class InscriptionClientComponent {
constructor(private readonly clientService: ClientService) {}
  

  newClient={nomClient:'',prenom:'',adresse:'',phone:'',sexe:0,dateCreationCompte:new Date(),mail:'',mdp:''};

  sexe: option[] = [
    { value: '0', viewValue: 'Féminin' },
    { value: '1', viewValue: 'Masculin' }
  ];

  selectedsexe = this.sexe[0].value;

  formEmail = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });


  addClient() : void {
    if( this.newClient.nomClient.trim() !== '' &&
    this.newClient.prenom.trim() !== '' &&
    this.newClient.mdp.trim() !== '' &&
    this.newClient.adresse.trim() !== '' &&
    this.newClient.phone.trim() !== '' &&
    this.newClient.sexe !== null && this.newClient.sexe !== undefined &&
    this.newClient.dateCreationCompte !== null && this.newClient.dateCreationCompte !== undefined && 
    this.newClient.mail.trim() !== '' 
  ) {
      this.clientService.addClient(this.newClient).subscribe(() => {
        this.newClient={nomClient:'',prenom:'',adresse:'',phone:'',sexe:0,dateCreationCompte:new Date(),mail:'',mdp:''};
      });
    }
  }
  
}
