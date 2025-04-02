import {  AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation  } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { Profil,ProfilService } from '../../../services/profils/profil.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTable, MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-liste-profils-component',
  standalone: true,
  imports: [
    MaterialModule,
    TablerIconsModule,
    MatTooltipModule
  ],
  templateUrl: './liste-profils-component.component.html',
  styleUrl: './liste-profils-component.component.scss'
})
export class ListeProfilsComponentComponent implements OnInit, AfterViewInit{
   profils: Profil[] = [];
   currentPage = 1;
   itemsPerPage = 10;
   totalItems = 0;
 
        displayedColumns: string[] = ['nomProfil', 'description', 'appellation'];
        detailsIcon = "solar:minimalistic-magnifer-zoom-in-outline"
        dataSource = new MatTableDataSource<Profil>();
      
        constructor(
          private readonly profilService: ProfilService,
          private readonly router: Router
        ) {}
      
        @ViewChild(MatPaginator) paginator!: MatPaginator;
        @ViewChild(MatTable) table!: MatTable<Profil>;
      
        ngOnInit(): void {
          this.loadProfils();
        };
      
        ngAfterViewInit(): void {
          this.dataSource.paginator = this.paginator;
        }
      
        loadProfils(): void {
          this.profilService.getProfils().subscribe((response: any) => {
            this.profils = response;
            this.dataSource.data = this.profils;
            this.table.renderRows();
          });
        };
      
        goToAddPage(): void {
          this.router.navigate(['/back/profil/formProfil']);
        }
}

// this.profilService.getProfils().subscribe((response: any) => {
//   console.log("Réponse API :", response); // 🔍 Vérifie la structure exacte dans la console

//   // Vérifie si la réponse contient bien les profils sous forme de tableau
//   if (Array.isArray(response)) {
//     this.profils = response;
//   } else if (response.data && Array.isArray(response.data)) {
//     this.profils = response.data; // Cas où les données sont dans un champ "data"
//   } else {
//     console.error("Format de réponse incorrect :", response);
//     alert("Erreur : impossible de charger les profils !");
//     return;
//   }

//   this.dataSource.data = this.profils;
//   this.table.renderRows();
//   alert(JSON.stringify(this.dataSource.data)); // Vérifie si les données sont bien chargées
// });