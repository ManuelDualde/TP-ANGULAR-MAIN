import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  // Lista de beneficios que se muestran en la sección "¿Por qué elegirnos?"
  beneficios = [
    { icono: '🚚', titulo: 'Envío gratis', descripcion: 'En compras superiores a $500.' },
    { icono: '🔒', titulo: 'Pago seguro', descripcion: 'Tus datos siempre protegidos.' },
    { icono: '↩️', titulo: 'Devoluciones', descripcion: '30 días para cambios sin costo.' },
    { icono: '🎧', titulo: 'Soporte 24/7', descripcion: 'Estamos para ayudarte siempre.' },
  ];
}
