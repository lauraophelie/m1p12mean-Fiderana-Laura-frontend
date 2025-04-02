import { Component } from '@angular/core';
import { ListeProfilsComponentComponent } from '../../../../components/profil/liste-profils-component/liste-profils-component.component';
@Component({
  selector: 'app-liste-profil',
  standalone: true,
  imports: [
    ListeProfilsComponentComponent
  ],
  templateUrl: './liste-profil.component.html',
  styleUrl: './liste-profil.component.scss'
})
export class ListeProfilComponent {

}
