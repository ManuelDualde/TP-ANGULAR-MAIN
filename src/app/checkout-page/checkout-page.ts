import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../cart/cart.service';
import { OrderService } from './order.service';
import { Order } from './Order';

@Component({
  selector: 'app-checkout-page',
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.scss',
})
export class CheckoutPage {
  carrito = inject(CartService);
  pedidoService = inject(OrderService);
  fb = inject(FormBuilder);

  pedidoExitoso = false;

  // Definición del formulario con sus validaciones
  form = this.fb.group({
    customerName: ['', [Validators.required, Validators.minLength(3)]],
    email:        ['', [Validators.required, Validators.email]],
    address:      ['', Validators.required],
    phone:        ['', [Validators.required, Validators.pattern(/^\d{8,15}$/)]],
  });

  enviarFormulario(): void {
    // Si el formulario tiene errores, los muestra todos y no continúa
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const pedido: Order = {
      customerName: this.form.value.customerName!,
      email:        this.form.value.email!,
      address:      this.form.value.address!,
      phone:        this.form.value.phone!,
      total:        this.carrito.total(),
      createdAt:    new Date().toISOString(),
    };

    // Envía el pedido a la API y vacía el carrito si tuvo éxito
    this.pedidoService.crearPedido(pedido).subscribe({
      next: () => {
        this.pedidoExitoso = true;
        this.carrito.vaciar();
        this.form.reset();
      },
    });
  }
}
