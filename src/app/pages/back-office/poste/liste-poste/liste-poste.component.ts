import { Component } from '@angular/core';
import { ListePostesComponentComponent } from '../../../../components/poste/liste-postes-component/liste-postes-component.component';
@Component({
  selector: 'app-liste-poste',
  standalone: true,
  imports: [
    ListePostesComponentComponent
  ],
  templateUrl: './liste-poste.component.html',
  styleUrl: './liste-poste.component.scss'
})
export class ListePosteComponent {

}
