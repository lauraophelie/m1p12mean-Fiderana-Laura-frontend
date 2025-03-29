import { Component } from '@angular/core';
import { InfosVoituresInsertComponent } from '../../../components/infos-voitures-insert/infos-voitures-insert.component';

@Component({
  selector: 'app-infos-voiture-client',
  standalone: true,
  imports: [
    InfosVoituresInsertComponent
  ],
  templateUrl: './infos-voiture-client.component.html',
  styleUrl: './infos-voiture-client.component.scss'
})
export class InfosVoitureClientComponent {

}
