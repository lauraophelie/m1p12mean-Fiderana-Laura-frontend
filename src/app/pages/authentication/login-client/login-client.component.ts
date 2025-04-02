import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators , FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router , RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';


@Component({
  selector: 'app-login-client',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login-client.component.html',
  styleUrl: './login-client.component.scss'
})

export class LoginClientComponent {
   constructor(private readonly router: Router) {}
  
    form = new FormGroup({
      uname: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required]),
    });
  
    get f() {
      return this.form.controls;
    }
  
    submit() {
      this.router.navigate(['']);
    }
}
