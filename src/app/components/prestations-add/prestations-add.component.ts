import { Component, OnInit } from '@angular/core';
import { Prestation, PrestationsService } from '../../services/prestations/prestations.service';
import { ServiceGarage, ServicesGarageService } from '../../services/services-garage/services-garage.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-prestations-add',
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
    MatOptionModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './prestations-add.component.html',
  styleUrl: './prestations-add.component.scss'
})
export class PrestationsAddComponent implements OnInit {
  newPrestation: Prestation = {
    nomPrestation: '',
    descriptionPrestation: '',
    serviceId: ''
  }
  services: ServiceGarage[] = [];
  filteredOptions: Observable<ServiceGarage[]> | undefined;
  myControl = new FormControl<string | ServiceGarage>('');

  constructor(private readonly prestationService: PrestationsService, private readonly serviceGarage: ServicesGarageService) {}

  ngOnInit(): void {
    this.loadServices();
  }
  loadServices(): void {
    this.serviceGarage.getServices().subscribe((response: any) => this.services = response.data);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.nomService;
        return name ? this._filter(name as string) : this.services.slice();
      })
    );
  }

  display(service: ServiceGarage): string {
    return service && service.nomService ? service.nomService : '';
  }

  private _filter(nomService: string): ServiceGarage[] {
    const filterValue = nomService.toLowerCase();
    return this.services.filter(service => service.nomService.toLowerCase().includes(filterValue));
  }

  addPrestation(): void {
    if(this.newPrestation.nomPrestation && this.newPrestation.serviceId) {
      this.prestationService.addPrestation(this.newPrestation).subscribe(() => {
        this.newPrestation = {
          nomPrestation: '',
          descriptionPrestation: '',
          serviceId: ''
        }
      });
    }
  }
}
