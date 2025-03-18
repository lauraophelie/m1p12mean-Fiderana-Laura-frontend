import { ServicesGarageComponent } from '../../../components/services-garage/services-garage.component';
import { MaterialModule } from '../../../material.module';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-services-ajout',
  standalone: true,
  imports: [
    MaterialModule,
    ServicesGarageComponent
  ],
  templateUrl: './services-ajout.component.html',
  styleUrl: './services-ajout.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ServicesAjoutComponent {

}
