<<<<<<< HEAD
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidoService } from '../../../services/pedido.service/pedido.service';
import { PedidoModel } from '../../../models/pedido.model/pedido.model';

@Component({
  selector: 'app-pedido',
  imports: [CommonModule, FormsModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent implements OnInit {
  private pedidoService = inject(PedidoService);

  pedidos: PedidoModel[] = [];
  mensaje = '';
  error = '';
  mostrarFormulario = false;
  formulario = { mesaId: 0 };

  ngOnInit() { this.cargar(); }

  cargar() {
    this.pedidoService.obtenerPedidos().subscribe({
      next: p => this.pedidos = p,
      error: () => this.error = 'Error al cargar pedidos.'
    });
  }

  abrirNuevo() {
    this.formulario = { mesaId: 0 };
    this.mostrarFormulario = true;
    this.mensaje = '';
    this.error = '';
  }

guardar() {
  this.pedidoService.crearPedido(this.formulario.mesaId).subscribe({
    next: () => { this.mensaje = 'Pedido creado.'; this.mostrarFormulario = false; this.cargar(); },
    error: () => this.error = 'Error al crear pedido.'
  });
}

cambiarEstado(id: number, estado: string) {
  this.pedidoService.cambiarEstado(id, estado).subscribe({
    next: () => { this.mensaje = 'Estado actualizado.'; this.cargar(); },
    error: () => this.error = 'Error al cambiar estado.'
  });
}

  cancelar() { this.mostrarFormulario = false; this.error = ''; }
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido.component',
  imports: [],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
})
export class PedidoComponent {}
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0
