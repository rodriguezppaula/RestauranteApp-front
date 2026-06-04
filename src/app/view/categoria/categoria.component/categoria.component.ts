import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service/categoria.service';
import { CategoriaModel } from '../../../models/categoria.model/categoria.model';

@Component({
  selector: 'app-categoria',
  imports: [CommonModule, FormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit {
  private categoriaService = inject(CategoriaService);

  categorias: CategoriaModel[] = [];
  mensaje = '';
  error = '';
  mostrarFormulario = false;
  editando = false;
  formulario: CategoriaModel = { id: 0, nombre: '' };

  ngOnInit() { this.cargar(); }

  cargar() {
    this.categoriaService.obtenerCategorias().subscribe({
      next: c => this.categorias = c,
      error: () => this.error = 'Error al cargar categorías.'
    });
  }

  abrirNuevo() {
    this.formulario = { id: 0, nombre: '' };
    this.editando = false;
    this.mostrarFormulario = true;
    this.mensaje = '';
    this.error = '';
  }

  abrirEditar(c: CategoriaModel) {
    this.formulario = { ...c };
    this.editando = true;
    this.mostrarFormulario = true;
    this.mensaje = '';
    this.error = '';
  }

  guardar() {
    if (this.editando) {
      this.categoriaService.actualizarCategoria(this.formulario.id, this.formulario).subscribe({
        next: () => { this.mensaje = 'Categoría actualizada.'; this.mostrarFormulario = false; this.cargar(); },
        error: () => this.error = 'Error al actualizar.'
      });
    } else {
      this.categoriaService.crearCategoria(this.formulario).subscribe({
        next: () => { this.mensaje = 'Categoría creada.'; this.mostrarFormulario = false; this.cargar(); },
        error: () => this.error = 'Error al crear.'
      });
    }
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar esta categoría?')) return;
    this.categoriaService.eliminarCategoria(id).subscribe({
      next: () => { this.mensaje = 'Categoría eliminada.'; this.cargar(); },
      error: () => this.error = 'Error al eliminar.'
    });
  }

  cancelar() { this.mostrarFormulario = false; this.error = ''; }
}