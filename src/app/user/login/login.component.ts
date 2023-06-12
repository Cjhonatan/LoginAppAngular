import { Component } from '@angular/core';
import { UserService } from 'src/app/servicies/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private userService: UserService) {}

  login() {
    this.userService.login(this.email, this.password)
    console.log('Email: ' + this.email, 'Password: ' + this.password);
  }
}
