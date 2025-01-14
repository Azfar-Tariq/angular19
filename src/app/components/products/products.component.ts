import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductServiceService } from './service/product.service';
import { CartService } from '../cart/service/cart.service';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productList: Product[] = [];

  constructor(
    private productService: ProductServiceService,
    private cartService: CartService
  ) {
    this.productService.getProducts().subscribe((res: any) => {
      this.productList = res.map((product: any) => new Product(product));
    });
  }

  addToCart(product: Product) {
    debugger;
    this.cartService.addToCart(product);
  }
}
