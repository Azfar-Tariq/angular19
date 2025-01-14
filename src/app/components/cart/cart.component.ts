import { Component } from '@angular/core';
import { CartService } from './service/cart.service';
import { CartCardComponent } from './cart-card/cart-card.component';

@Component({
  selector: 'app-cart',
  imports: [CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.getCartItems();
  }

  get cartTotal() {
    return this.cartService.getTotal();
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  decreaseQuantity(productId: number) {
    this.cartService.decreaseQuantity(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
