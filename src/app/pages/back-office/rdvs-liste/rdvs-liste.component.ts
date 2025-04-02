import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RendezVousService } from '../../../services/rendez-vous/rendez-vous.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-rdvs-liste',
  standalone: true,
  imports: [],
  templateUrl: './rdvs-liste.component.html',
  styleUrl: './rdvs-liste.component.scss'
})
export class RdvsListeComponent implements OnInit, AfterViewInit {
  listeRdv: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ["dateRdv", "heureRdv", "voitureId", "clientId", "commentaires", "status", "actions"];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private readonly rendezVousServices: RendezVousService
  ) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  ngOnInit(): void {
    this.loadAllRdv();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadAllRdv(): void {
    this.rendezVousServices.getAllRdv(this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.listeRdv = response.data;
      this.totalItems = response.totalItems;
      this.dataSource.data = this.listeRdv;

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  }
}
