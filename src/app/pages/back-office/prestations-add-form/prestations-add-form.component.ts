import { Component } from '@angular/core';
import { PrestationsAddComponent } from '../../../components/prestations-add/prestations-add.component';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-prestations-add-form',
  standalone: true,
  imports: [
    MaterialModule,
    PrestationsAddComponent
  ],
  templateUrl: './prestations-add-form.component.html',
  styleUrl: './prestations-add-form.component.scss'
})
export class PrestationsAddFormComponent {

}
