import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-etat-stocks',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './etat-stocks.component.html',
  styleUrl: './etat-stocks.component.scss'
})
export class EtatStocksComponent {

}
