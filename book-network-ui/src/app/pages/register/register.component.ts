import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationRequest } from '../../services/models';

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
    private router: Router
  ) { }

  register() {
    throw new Error('Method not implemented.');
  }

  login() {
    throw new Error('Method not implemented.');
  }

}
