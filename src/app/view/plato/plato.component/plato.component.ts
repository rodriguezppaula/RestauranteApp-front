import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlatoService } from '../../../services/plato.service/plato.service';
import { PlatoModel } from '../../../models/plato.model/plato.model';
import { AuthService } from '../../../services/auth.service/auth.service';

@Component({
  selector: 'app-plato',
  imports: [CommonModule, FormsModule],
  templateUrl: './plato.component.html',
  styleUrl: './plato.component.css'
})
export class PlatoComponent implements OnInit {
  private platoService = inject(PlatoService);
  auth = inject(AuthService);

  platos: PlatoModel[] = [];
  busqueda = '';
  mensaje = '';
  error = '';
  mostrarFormulario = false;
  editando = false;

  formulario: PlatoModel = this.formularioVacio();

  get platosFiltrados(): PlatoModel[] {
    return this.platos.filter(p =>
      p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  formularioVacio(): PlatoModel {
    return { id: 0, nombre: '', descripcion: '', precio: 0, disponible: true, categoriaId: 0 };
  }

  ngOnInit() { this.cargar(); }

  cargar() {
    this.platoService.obtenerPlatos().subscribe({
      next: p => this.platos = p,
      error: () => this.error = 'Error al cargar platos.'
    });
  }

  abrirNuevo() {
    this.formulario = this.formularioVacio();
    this.editando = false;
    this.mostrarFormulario = true;
    this.mensaje = '';
    this.error = '';
  }

  abrirEditar(p: PlatoModel) {
    this.formulario = { ...p };
    this.editando = true;
    this.mostrarFormulario = true;
    this.mensaje = '';
    this.error = '';
  }

  guardar() {
    if (this.editando) {
      this.platoService.actualizarPlato(this.formulario.id, this.formulario).subscribe({
        next: () => { this.mensaje = 'Plato actualizado.'; this.mostrarFormulario = false; this.cargar(); },
        error: () => this.error = 'Error al actualizar.'
      });
    } else {
      this.platoService.crearPlato(this.formulario).subscribe({
        next: () => { this.mensaje = 'Plato creado.'; this.mostrarFormulario = false; this.cargar(); },
        error: () => this.error = 'Error al crear.'
      });
    }
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar este plato?')) return;
    this.platoService.eliminarPlato(id).subscribe({
      next: () => { this.mensaje = 'Plato eliminado.'; this.cargar(); },
      error: () => this.error = 'Error al eliminar.'
    });
  }

  cancelar() { this.mostrarFormulario = false; this.error = ''; }
}