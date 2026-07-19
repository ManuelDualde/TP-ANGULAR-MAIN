import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../product-card/Product';
import { CartItem } from './CartItem';

// Servicio compartido que maneja el estado del carrito en toda la app
@Injectable({ providedIn: 'root' })
export class CartService {

  // Lista reactiva de productos en el carrito
  items = signal<CartItem[]>([]);

  // Se recalcula automáticamente cada vez que cambia la lista
  total = computed(() =>
    this.items().reduce((sum, i) => sum + i.product.price * i.quantity, 0)
  );

  cantidadItems = computed(() =>
    this.items().reduce((sum, i) => sum + i.quantity, 0)
  );

  // Si el producto ya está en el carrito, suma uno; si no, lo agrega
  agregar(producto: Product): void {
    const existe = this.items().find(i => i.product.id === producto.id);
    if (existe) {
      this.items.update(items =>
        items.map(i =>
          i.product.id === producto.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      this.items.update(items => [...items, { product: producto, quantity: 1 }]);
    }
  }

  eliminar(productoId: number): void {
    this.items.update(items => items.filter(i => i.product.id !== productoId));
  }

  vaciar(): void {
    this.items.set([]);
  }
}
