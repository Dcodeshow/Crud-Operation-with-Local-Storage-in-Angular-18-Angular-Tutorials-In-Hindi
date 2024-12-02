import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userRegister: any[] = [];

  userLogin = {
    username: '',
    email: '',
    password: '',
  };

  Login = {
    username: '',

    password: '',
  };

  onRegister() {
    this.userRegister.push(this.userLogin);
    this.userLogin = {
      username: '',
      email: '',
      password: '',
    };

    localStorage.setItem('userDetails', JSON.stringify(this.userRegister));
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('userDetails');
    if (localData != null) {
      this.userRegister = JSON.parse(localData);
    }
    console.log(this.userRegister);
  }

  onLogin() {
    const loginDetails = this.userRegister.find(
      (e) =>
        e.username == this.Login.username && e.password == this.Login.password
    );
    this.Login = {
      username: '',
      password: '',
    };
    if (loginDetails != undefined) {
      alert('Login Successful');
    } else {
      alert('Invalid Details');
    }
  }
}
