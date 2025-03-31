import { Component, OnInit } from '@angular/core';
import { ServicesGarageService } from '../../../../services/services-garage/services-garage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-client',
  standalone: true,
  imports: [],
  templateUrl: './services-client.component.html',
  styleUrl: './services-client.component.scss'
})
export class ServicesClientComponent implements OnInit {
  listeServices: any[] = []

  constructor(
    private readonly serviceGarageService: ServicesGarageService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loadServices();
  }

  loadServices(): void {
    this.serviceGarageService.getRandomServices().subscribe((response: any) => {
      this.listeServices = response.data;
    });
  }
}
