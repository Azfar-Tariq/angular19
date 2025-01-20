import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, ProductsComponent, CartComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  router = inject(Router);

  onLogout() {
    const res = confirm('Are you sure you want to logout?');
    if (res) {
      this.router.navigateByUrl('login');
    }
  }
}
