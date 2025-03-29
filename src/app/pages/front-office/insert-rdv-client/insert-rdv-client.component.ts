import { Component } from '@angular/core';
import { AddRdvClientComponent } from '../../../components/add-rdv-client/add-rdv-client.component';

@Component({
  selector: 'app-insert-rdv-client',
  standalone: true,
  imports: [
    AddRdvClientComponent
  ],
  templateUrl: './insert-rdv-client.component.html',
  styleUrl: './insert-rdv-client.component.scss'
})
export class InsertRdvClientComponent {

}
