import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Marque, MarqueService } from '../../../services/marques/marque.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-marque-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './marque-list.component.html',
  styleUrl: './marque-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarqueListComponent implements OnInit {
  marques: Marque[] = [];
  newMarque = { designationMarque: '' };

  constructor(private readonly marqueService: MarqueService) {}

  ngOnInit(): void {
      console.log("load marques");
  }

  addMarque() : void {
    if(this.newMarque.designationMarque) {
      this.marqueService.addMarque(this.newMarque).subscribe(() => {
        this.newMarque = { designationMarque: '' };
      });
    }
  }
}
