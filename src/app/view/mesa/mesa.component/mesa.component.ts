import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MesaService } from '../../../services/mesa.service/mesa.service';
import { MesaModel } from '../../../models/mesa.model/mesa.model';

@Component({
  selector: 'app-mesa',
  imports: [CommonModule, FormsModule],
  templateUrl: './mesa.component.html',
  styleUrl: './mesa.component.css'
})
export class MesaComponent implements OnInit {
  private mesaService = inject(MesaService);

  mesas: MesaModel[] = [];
  mensaje = '';
  error = '';
  mostrarFormulario = false;
  editando = false;
  formulario: MesaModel = { id: 0, numero: 0, capacidad: 0, estado: 'Disponible' };

  ngOnInit() { this.cargar(); }

  cargar() {
    this.mesaService.obtenerMesas().subscribe({
      next: m => this.mesas = m,
      error: () => this.error = 'Error al cargar mesas.'
    });
  }

  abrirNuevo() {
    this.formulario = { id: 0, numero: 0, capacidad: 0, estado: 'Disponible' };
    this.editando = false;
    this.mostrarFormulario = true;
    this.mensaje = '';
    this.error = '';
  }

  abrirEditar(m: MesaModel) {
    this.formulario = { ...m };
    this.editando = true;
    this.mostrarFormulario = true;
    this.mensaje = '';
    this.error = '';
  }

  guardar() {
    if (this.editando) {
      this.mesaService.actualizarMesa(this.formulario.id, this.formulario).subscribe({
        next: () => { this.mensaje = 'Mesa actualizada.'; this.mostrarFormulario = false; this.cargar(); },
        error: () => this.error = 'Error al actualizar.'
      });
    } else {
      this.mesaService.crearMesa(this.formulario).subscribe({
        next: () => { this.mensaje = 'Mesa creada.'; this.mostrarFormulario = false; this.cargar(); },
        error: () => this.error = 'Error al crear.'
      });
    }
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar esta mesa?')) return;
    this.mesaService.eliminarMesa(id).subscribe({
      next: () => { this.mensaje = 'Mesa eliminada.'; this.cargar(); },
      error: () => this.error = 'Error al eliminar.'
    });
  }

  cancelar() { this.mostrarFormulario = false; this.error = ''; }
}