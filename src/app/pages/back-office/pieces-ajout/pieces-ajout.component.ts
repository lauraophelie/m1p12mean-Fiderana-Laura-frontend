import { Component } from '@angular/core';
import { PiecesAddComponent } from '../../../components/pieces-add/pieces-add.component';

@Component({
  selector: 'app-pieces-ajout',
  standalone: true,
  imports: [
    PiecesAddComponent
  ],
  templateUrl: './pieces-ajout.component.html',
  styleUrl: './pieces-ajout.component.scss'
})
export class PiecesAjoutComponent {

}
