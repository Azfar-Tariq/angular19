import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginObj: any = {
    username: '',
    password: '',
  };

  router = inject(Router);
  authService = inject(AuthService);

  onLogin() {
    debugger;
    if (
      this.authService.login(this.loginObj.username, this.loginObj.password)
    ) {
      if (this.authService.getRole() === 'admin') {
        this.router.navigateByUrl('admin-dashboard');
      } else if (this.authService.getRole() === 'user') {
        this.router.navigateByUrl('products');
      }
    } else {
      alert('Invalid username or password');
    }
  }
}
