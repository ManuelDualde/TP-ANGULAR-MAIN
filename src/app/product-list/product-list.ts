import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product-card/Product';

// Muestra la grilla de productos recibidos desde la página principal
@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  @Input() products: Product[] = [];
  @Input() cargando: boolean = false;
  @Output() addToCart = new EventEmitter<Product>();
}
