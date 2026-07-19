import { Routes } from '@angular/router';
import { ProductsPage } from './products-page/products-page';
import { CheckoutPage } from './checkout-page/checkout-page';
import { AboutPage } from './about-page/about-page';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ProductsPage },
  { path: 'checkout', component: CheckoutPage },
  { path: 'nosotros', component: AboutPage },
];
