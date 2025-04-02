import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Poste,PosteService } from '../../../services/postes/poste.service';
import { EmployesService } from '../../../services/employes/employes.service';
interface option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ajout-employe',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './ajout-employe.component.html',
  styleUrl: './ajout-employe.component.scss'
})
export class AjoutEmployeComponent {
  postes:Poste[]=[];

    constructor(private readonly posteService: PosteService,private readonly employeService: EmployesService) {}
  

  newEmploye={nomEmploye:'',prenom:'',matricule:'',adresse:'',phone:'',CIN:'',sexe:0,poste:'',dateEmbauche:new Date(),mail:''};

  sexe: option[] = [
    { value: '0', viewValue: 'Féminin' },
    { value: '1', viewValue: 'Masculin' }
  ];

  selectedsexe = this.sexe[0].value;

  formEmail = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit(): void {
    this.loadPostes();
  }

  loadPostes(): void {
    this.posteService.getPostes().subscribe(data => this.postes = data);
  }

  addEmploye() : void {
    if( this.newEmploye.nomEmploye.trim() !== '' &&
    this.newEmploye.prenom.trim() !== '' &&
    this.newEmploye.matricule.trim() !== '' &&
    this.newEmploye.adresse.trim() !== '' &&
    this.newEmploye.phone.trim() !== '' &&
    this.newEmploye.CIN.trim() !== '' &&
    this.newEmploye.sexe !== null && this.newEmploye.sexe !== undefined &&
    this.newEmploye.poste.trim() !== '' &&
    this.newEmploye.dateEmbauche !== null && this.newEmploye.dateEmbauche !== undefined && 
    this.newEmploye.mail.trim() !== '' 
  ) {
      this.employeService.addEmploye(this.newEmploye).subscribe(() => {
        this.newEmploye ={nomEmploye:'',prenom:'',matricule:'',adresse:'',phone:'',CIN:'',sexe:0,poste:'',dateEmbauche:new Date(),mail:''};
      });
    }
  }
  
}
