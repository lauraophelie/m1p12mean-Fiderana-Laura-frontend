import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Modele, ModeleService } from '../../../services/modeles/modele.service';
import { Marque, MarqueService } from '../../../services/marques/marque.service';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-modele-liste',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatOptionModule
  ],
  templateUrl: './modele-liste.component.html',
  styleUrl: './modele-liste.component.scss'
})
export class ModeleListeComponent implements OnInit {
  newModele: Modele = { designationModele: '', marqueId: '' };
  marques: Marque[] = [];

  constructor(private readonly modeleService: ModeleService, private readonly marqueService: MarqueService) {}

  ngOnInit(): void {
    this.loadMarques();
  }

  loadMarques(): void {
    this.marqueService.getMarques().subscribe(data => this.marques = data.data);
  }

  addModele(): void {
    if(this.newModele.designationModele && this.newModele.marqueId) {
      this.modeleService.addModele(this.newModele).subscribe(() => {
        this.newModele = { designationModele: '', marqueId: '' };
      });
    }
  }
}
