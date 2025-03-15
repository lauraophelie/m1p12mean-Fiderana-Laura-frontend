import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Marque, MarqueService } from '../../../services/marques/marque.service';

@Component({
  selector: 'app-marque-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './marque-list.component.html',
  styleUrl: './marque-list.component.scss'
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
