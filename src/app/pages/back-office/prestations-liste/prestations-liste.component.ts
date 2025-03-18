import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { PrestationsService } from '../../../services/prestations/prestations.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestations-liste',
  standalone: true,
  imports: [
    MaterialModule,
    TablerIconsModule,
    MatTooltipModule
  ],
  templateUrl: './prestations-liste.component.html',
  styleUrl: './prestations-liste.component.scss'
})
export class PrestationsListeComponent implements OnInit, AfterViewInit {
  prestations: any[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalItems = 0;

  displayedColumns: string[] = ['nomPrestation', 'serviceId', 'actions'];
  dataSource = new MatTableDataSource<any[]>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private readonly prestationService: PrestationsService,
    private readonly router: Router
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  };
  ngOnInit(): void {
    this.loadPrestations();
  };

  loadPrestations(): void {
    this.prestationService.getPrestationsPages(this.currentPage, this.itemsPerPage).subscribe((response: any) => {
      this.prestations = response.data;
      this.totalItems = response.totalItems;
      this.dataSource = response.data;

      console.log(this.prestations);

      this.paginator.length = this.totalItems;
      this.table.renderRows();
    });
  };

  goToAddPage(): void {
    this.router.navigate(['/back/prestation']);
  };

  goToDetailsService(serviceId: string): void {
    this.router.navigate([`/back/service/liste/${serviceId}`]);
  };

  goToDetails(prestationId: string): void {
    this.router.navigate([`/back/prestation/liste/${prestationId}`]);
  }
}
