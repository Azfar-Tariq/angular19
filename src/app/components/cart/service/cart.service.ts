import { Injectable } from '@angular/core';
import { Product } from '../../../models/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {}

  addToCart(product: Product) {
    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  removeFromCart(productId: number) {
    const index = this.cartItems.findIndex(
      (item) => item.product.id === productId
    );
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  decreaseQuantity(productId: number) {
    const item = this.cartItems.find(
      (cartItem) => cartItem.product.id === productId
    );
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    }
  }

  clearCart() {
    this.cartItems = [];
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
}
