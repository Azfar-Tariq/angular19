import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../service/cart.service';

@Component({
  selector: 'app-cart-card',
  imports: [],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css',
})
export class CartCardComponent {
  @Input() item!: CartItem;
  @Output() removeItem = new EventEmitter<number>();
  @Output() decreaseQuantity = new EventEmitter<number>();

  onRemoveItem() {
    this.removeItem.emit(this.item.product.id);
  }

  onDecreaseQuantity() {
    this.decreaseQuantity.emit(this.item.product.id);
  }
}
