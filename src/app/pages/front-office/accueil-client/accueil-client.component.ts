import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { IntroClientComponent } from './intro-client/intro-client.component';
import { ServicesClientComponent } from './services-client/services-client.component';

@Component({
  selector: 'app-accueil-client',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    IntroClientComponent,
    ServicesClientComponent
  ],
  templateUrl: './accueil-client.component.html',
  styleUrl: './accueil-client.component.scss'
})
export class AccueilClientComponent {

}
