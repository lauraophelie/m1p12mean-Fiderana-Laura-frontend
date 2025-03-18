import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MarqueListComponent } from '../../../components/marques/marque-list/marque-list.component';

@Component({
  selector: 'app-marque-voiture',
  standalone: true,
  imports: [
    MaterialModule,
    MarqueListComponent
  ],
  templateUrl: './marque-voiture.component.html',
  styleUrl: './marque-voiture.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MarqueVoitureComponent {

}
