import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators , FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Router , RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';

@Component({
  selector: 'app-login-manager',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login-manager.component.html',
  styleUrl: './login-manager.component.scss'
})
export class LoginManagerComponent {
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
