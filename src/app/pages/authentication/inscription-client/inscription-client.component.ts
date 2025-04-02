import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-inscription-client',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './inscription-client.component.html',
  styleUrl: './inscription-client.component.scss'
})
export class InscriptionClientComponent {

  sexe: option[] = [
    { value: '0', viewValue: 'Féminin' },
    { value: '1', viewValue: 'Masculin' }
  ];

  selectedsexe = this.sexe[0].value;

  formEmail = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
  });
  
}
