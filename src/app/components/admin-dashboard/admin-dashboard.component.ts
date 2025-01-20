import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductServiceService } from '../products/service/product.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../login/service/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
})
export class AdminDashboardComponent implements OnInit {
  products: Product[] = [];
  currentProduct: Partial<Product> = {};
  editMode = false;

  constructor(
    private productService: ProductServiceService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.products = res.map((product: any) => new Product(product));
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onSubmit() {}

  editProduct(product: Product) {}

  deleteProduct(productId: number) {}

  cancelEdit() {}

  resetForm() {}
}
