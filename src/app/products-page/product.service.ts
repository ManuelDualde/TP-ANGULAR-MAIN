import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Product } from '../product-card/Product';

// Servicio que se comunica con la API de DummyJSON para traer los productos
@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);
  private apiUrl = 'https://dummyjson.com/products';

  // Categorías que se consideran tech para filtrar del catálogo general
  private categoriasTech = ['smartphones', 'laptops', 'tablets', 'mobile-accessories'];

  obtenerProductos(): Observable<Product[]> {
    return this.http
      .get<{ products: Product[] }>(this.apiUrl + '?limit=194')
      .pipe(
        map(res => res.products.filter(p => this.categoriasTech.includes(p.category)))
      );
  }
}
