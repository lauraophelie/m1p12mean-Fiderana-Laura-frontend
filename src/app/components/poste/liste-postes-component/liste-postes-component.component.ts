import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { Poste,PosteService } from '../../../services/postes/poste.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Profil , ProfilService} from '../../../services/profils/profil.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-liste-postes-component',
  standalone: true,
  imports: [
    MaterialModule,
    TablerIconsModule,
    MatTooltipModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './liste-postes-component.component.html',
  styleUrl: './liste-postes-component.component.scss'
})
export class ListePostesComponentComponent implements OnInit, AfterViewInit{
  postes: Poste[] = [];
  newPoste={nomPoste:'',description:'',profil:'',} //pour la modification
  profils:Profil[]=[]; // pour la modification 
    
      displayedColumns: string[] = ['nomPoste', 'description','nomProfil','actions'];
      detailsIcon = "solar:minimalistic-magnifer-zoom-in-outline"
      dataSource = new MatTableDataSource<Poste>();
      editingRow: Poste | null = null; // Initialement, aucun élément n'est en mode édition

      editPoste(element: Poste) {
        this.editingRow = element; // Active le mode édition pour cet élément
      }
    
      validatePoste(element:Poste) {
        this.posteService.updatePoste(element).subscribe({
          next: (response) => {
            console.log("Mise à jour réussie :", response);
          },
          error: (error) => {
            console.error("Erreur lors de la mise à jour :", error);
          },
          complete: () => {
            console.log("Mise à jour terminée.");
          }
        });
        this.editingRow = null; // Désactive le mode édition
      }
    
      deletePoste(poste: Poste): void {
        this.posteService.deletePoste(poste).subscribe({
          next: () => {
            console.log("Poste supprimé avec succès");
      
            // Mettre à jour le tableau local après suppression
            this.dataSource.data = this.dataSource.data.filter(item => item._id !== poste._id);
          },
          error: (error) => {
            console.error("Erreur lors de la suppression :", error);
          }
        });
      }

      isEditing(element: Poste): boolean {
        // alert(this.editingRow === element)
        return this.editingRow === element;
      }

      constructor(
        private readonly posteService: PosteService,
        private readonly profilService: ProfilService,
        private readonly router: Router
      ) {}
    
      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatTable) table!: MatTable<Poste>;
    
      ngOnInit(): void {
        this.loadPostes();
        this.loadProfils();
      };
    
      ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
      }
    
      loadPostes(): void {
        this.posteService.getPostes().subscribe((response: any) => {
          this.postes = response;
          this.dataSource.data = this.postes;
          this.table.renderRows();
        });
      };

      loadProfils(): void {
        this.profilService.getProfils().subscribe(data => this.profils = data);
      }

      addPoste() : void {
        if(this.newPoste.nomPoste && this.newPoste.description && this.newPoste.profil) {
          this.posteService.addPoste(this.newPoste).subscribe(() => {
            this.newPoste = { nomPoste:'',description:'',profil:'' };
          });
        }
      }
    
      goToAddPage(): void {
        this.router.navigate(['/back/poste/formPoste']);
      }
}