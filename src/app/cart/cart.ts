import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  // Inyecta el servicio del carrito para leer y modificar los items
  carrito = inject(CartService);
}
