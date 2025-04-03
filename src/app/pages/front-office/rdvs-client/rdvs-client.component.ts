import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { RendezVousService } from '../../../services/rendez-vous/rendez-vous.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { variableTest } from '../../../../variables-test/variable';
import { CommonModule } from '@angular/common';
import { BadgeStatusComponent } from '../../../components/badge-status/badge-status.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAnnulationRdvComponent } from './confirm-annulation-rdv/confirm-annulation-rdv.component';

@Component({
  selector: 'app-rdvs-client',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule,
    BadgeStatusComponent,
    ConfirmAnnulationRdvComponent
  ],
  templateUrl: './rdvs-client.component.html',
  styleUrl: './rdvs-client.component.scss'
})
export class RdvsClientComponent implements OnInit, AfterViewInit {
  clientId: string = `${variableTest.client}`;
  listeRdv: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ["dateRdv", "heureRdv", "voitureId", "commentaires", "status", "actions"];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private readonly rdvService: RendezVousService,
    private readonly router: Router
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    this.loadRdvClients();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadRdvClients(): void {
    this.rdvService.getRdvsClient(this.clientId, this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.listeRdv = response.data;
      this.totalItems = response.totalItems;
      this.dataSource.data = this.listeRdv;

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  }

  selectedRdv: string | null = null;
  readonly popup = inject(MatDialog);

  confirmationAnnulation(rdvId: string): void {
    this.selectedRdv = rdvId;
    this.popup.open(ConfirmAnnulationRdvComponent, {
      data: {
        rdvId: this.selectedRdv
      }
    })
  }

  goToAddPage(): void {
    this.router.navigate(['/front/rdv/add']);
  }
}
