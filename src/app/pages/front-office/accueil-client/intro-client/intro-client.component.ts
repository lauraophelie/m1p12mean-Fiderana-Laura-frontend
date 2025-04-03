import { Component } from '@angular/core';
import { MaterialModule } from '../../../../material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-client',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './intro-client.component.html',
  styleUrl: './intro-client.component.scss'
})
export class IntroClientComponent {
  constructor(
    private readonly router: Router
  ) {}

  goToAddPage(): void {
    this.router.navigate(['/front/rdv/add']);
  }
}
