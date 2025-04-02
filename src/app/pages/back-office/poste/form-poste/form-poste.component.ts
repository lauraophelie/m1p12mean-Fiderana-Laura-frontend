import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators , FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router , RouterModule } from '@angular/router';
import { PosteService } from '../../../../services/postes/poste.service';
import { Profil,ProfilService } from '../../../../services/profils/profil.service';
import { MaterialModule } from '../../../../material.module';
interface option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-poste',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-poste.component.html',
  styleUrl: './form-poste.component.scss'
})
export class FormPosteComponent {
  profils:Profil[]=[];

  newPoste={nomPoste:'',description:'',profil:'',}

    constructor(private readonly posteService: PosteService,private readonly profilService: ProfilService) {}
    
    ngOnInit(): void {
      this.loadProfils();
    }
  
    loadProfils(): void {
      this.profilService.getProfils().subscribe(data => this.profils = data);
    }

    addPoste() : void {
      if(this.newPoste.nomPoste && this.newPoste.description && this.newPoste.profil) {
        this.posteService.addPoste(this.newPoste).subscribe(() => {
          this.newPoste = { nomPoste:'',description:'',profil:'' };
        });
      }
    }
}
