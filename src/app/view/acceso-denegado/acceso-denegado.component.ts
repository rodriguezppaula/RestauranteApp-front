import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso-denegado',
  template: `
    <div style="text-align:center; padding: 5rem;">
      <h1>🚫 Acceso Denegado</h1>
      <p>No tienes permiso para ver esta página.</p>
      <button (click)="volver()" style="padding:0.6rem 1.5rem; background:#e67e22; color:white; border:none; border-radius:8px; cursor:pointer;">
        Volver al inicio
      </button>
    </div>
  `
})
export class AccesoDenegadoComponent {
  private router = inject(Router);
  volver() { this.router.navigate(['/plato']); }
}