import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductServiceService } from './service/product.service';
import { CartService } from '../cart/service/cart.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, FormsModule, NgClass],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productList: Product[] = [];
  filteredProductList: Product[] = [];
  searchTerm: string = '';
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(
    private productService: ProductServiceService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        this.productList = res.map((product: any) => new Product(product));
        this.filteredProductList = [...this.productList];
        this.populateCategories();
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  populateCategories() {
    const categorySet = new Set(
      this.productList.map((product) => product.category)
    );
    this.categories = Array.from(categorySet);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  onSearch() {
    this.applyFilters();
  }

  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  applyFilters() {
    this.filteredProductList = this.productList.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      const matchesCategory =
        !this.selectedCategory || product.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
}
