import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './Order';

// Servicio que guarda y trae pedidos desde MockAPI
@Injectable({ providedIn: 'root' })
export class OrderService {
  private http = inject(HttpClient);
  private apiUrl = 'https://6a42d25a7602860e6521e3e7.mockapi.io/orders';

  obtenerPedidos(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiUrl);
  }

  crearPedido(pedido: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, pedido);
  }

  eliminarPedido(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
