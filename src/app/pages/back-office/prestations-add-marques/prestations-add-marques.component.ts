import { Component } from '@angular/core';
import { PrestationsMarquesAddComponent } from '../../../components/prestations-marques-add/prestations-marques-add.component';

@Component({
  selector: 'app-prestations-add-marques',
  standalone: true,
  imports: [
    PrestationsMarquesAddComponent
  ],
  templateUrl: './prestations-add-marques.component.html',
  styleUrl: './prestations-add-marques.component.scss'
})
export class PrestationsAddMarquesComponent {

}
