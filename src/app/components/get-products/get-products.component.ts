import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-products',
  imports: [],
  templateUrl: './get-products.component.html',
  styleUrl: './get-products.component.css',
})
export class GetProductsComponent {
  productList: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://fakestoreapi.com/products').subscribe((res: any) => {
      this.productList = res;
    });
    console.log(this.productList);
  }
}
