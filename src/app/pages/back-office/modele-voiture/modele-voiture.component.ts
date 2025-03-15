import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { ModeleListeComponent } from '../../../components/marques/modele-liste/modele-liste.component';

@Component({
  selector: 'app-modele-voiture',
  standalone: true,
  imports: [
    MaterialModule,
    ModeleListeComponent
  ],
  templateUrl: './modele-voiture.component.html',
  styleUrl: './modele-voiture.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ModeleVoitureComponent {

}
