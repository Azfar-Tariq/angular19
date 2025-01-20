import { Injectable } from '@angular/core';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    if (username == 'user' && password == 'user123') {
      this.currentUser = { username: 'user', role: 'user' };
      return true;
    } else if (username === 'admin' && password === 'admin123') {
      this.currentUser = { username: 'admin', role: 'admin' };
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  getRole(): string {
    return this.currentUser?.role?.toLowerCase() || '';
  }
}
