import { Component } from '@angular/core';
import { AuthenticationRequest } from '../../services/models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {



  authRequest: AuthenticationRequest = { email: '', password: '' };
  errorMsg: Array<string> = [];

  login() {
    throw new Error('Method not implemented.');
  }

  register() {
    throw new Error('Method not implemented.');
  }

}
