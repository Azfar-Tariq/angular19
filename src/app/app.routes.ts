import { Routes } from '@angular/router';
import { GetApiComponent } from './components/get-api/get-api.component';
import { GetProductsComponent } from './components/get-products/get-products.component';

export const routes: Routes = [
  {
    path: 'get-products',
    component: GetProductsComponent,
  },
];
