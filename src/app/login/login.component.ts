import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  mockUsers = [
    { username: 'admin', password: '1234', role: 'admin' },
    { username: 'user', password: '1234', role: 'user' }
  ];

  constructor(private router: Router) {}

  onSubmit() {
    const user = this.mockUsers.find(u => u.username === this.username && u.password === this.password);

    if (user) {
      alert(`Welcome ${user.role}!`);
      // Navigate to dashboard or any protected page
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }
}