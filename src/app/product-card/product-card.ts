import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from './Product';

// Muestra la información de un producto y emite un evento al hacer click en "Agregar"
@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  alAgregar(): void {
    this.addToCart.emit(this.product);
  }
}
