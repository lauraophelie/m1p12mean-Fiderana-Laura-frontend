import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators , FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router , RouterModule } from '@angular/router';
import { MaterialModule } from '../../../../material.module';
import { Profil, ProfilService } from '../../../../services/profils/profil.service';

@Component({
  selector: 'app-form-profil',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-profil.component.html',
  styleUrl: './form-profil.component.scss'
})
export class FormProfilComponent {
  newProfil={nomProfil:'',description:'',appellation:'',}

  constructor(private readonly profilService: ProfilService) {}
  
  addProfil() : void {
    if(this.newProfil.nomProfil && this.newProfil.description && this.newProfil.appellation) {
      this.profilService.addProfil(this.newProfil).subscribe(() => {
        this.newProfil = { nomProfil:'',description:'',appellation:'' };
      });
    }
  }
}
