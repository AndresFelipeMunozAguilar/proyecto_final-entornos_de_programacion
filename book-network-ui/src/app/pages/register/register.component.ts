import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationRequest } from '../../services/models';
import { AuthenticationService } from '../../services/services';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerRequest: RegistrationRequest = { firstName: '', lastName: '', email: '', password: '' }
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  register() {

    this.errorMsg = [];

    this.authService.register({

      body: this.registerRequest,

    }).subscribe({
      next: () => {

        this.router.navigate(['activate-account']);

      },

      error: (err) => {

        this.errorMsg = err.error.validationErrors;


      }

    });

  }

  login() {
    this.router.navigate(['login']);
  }

}
