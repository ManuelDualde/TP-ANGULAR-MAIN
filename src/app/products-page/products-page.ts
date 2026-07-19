import { Component, OnInit, inject } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { Cart } from '../cart/cart';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { Product } from '../product-card/Product';

@Component({
  selector: 'app-products-page',
  imports: [ProductList, Cart],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage implements OnInit {
  carrito = inject(CartService);
  productoService = inject(ProductService);

  productos: Product[] = [];
  cargando: boolean = false;

  // Al iniciar la página se piden los productos a la API
  ngOnInit(): void {
    this.cargando = true;
    this.productoService.obtenerProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.cargando = false;
      },
      error: () => {
        this.cargando = false;
      }
    });
  }

  // Agrega el producto seleccionado al carrito usando el servicio compartido
  alAgregar(producto: Product): void {
    this.carrito.agregar(producto);
  }
}
