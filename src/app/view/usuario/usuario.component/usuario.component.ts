import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearUsuarioDto, UsuarioService } from '../../../services/usuario.service/usuario.service';
import { UsuarioModel } from '../../../models/usuario.model/usuario.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  private usuarioService = inject(UsuarioService);

  usuarios: UsuarioModel[] = [];
  mensaje = '';
  error = '';

  panel: 'ninguno' | 'crear' | 'editar' = 'ninguno';
  nuevo: CrearUsuarioDto = { nombre: '', email: '', password: '', rol: 'Cliente' };
  editando: UsuarioModel = { id: 0, nombre: '', email: '', rol: 'Cliente' };

  ngOnInit() { this.cargar(); }

  cargar() {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: u => this.usuarios = u,
      error: () => this.error = 'Error al cargar usuarios.'
    });
  }

  abrirCrear() {
    this.nuevo = { nombre: '', email: '', password: '', rol: 'Cliente' };
    this.panel = 'crear';
    this.mensaje = '';
    this.error = '';
  }

  abrirEditar(u: UsuarioModel) {
    this.editando = { ...u };
    this.panel = 'editar';
    this.mensaje = '';
    this.error = '';
  }

  cancelar() { this.panel = 'ninguno'; this.error = ''; }

  crear() {
    this.error = '';
    this.usuarioService.crearUsuario(this.nuevo).subscribe({
      next: () => { this.mensaje = 'Usuario creado exitosamente.'; this.panel = 'ninguno'; this.cargar(); },
      error: err => this.error = err?.error?.mensaje || 'Error al crear el usuario.'
    });
  }

  guardarEdicion() {
    this.error = '';
    this.usuarioService.actualizarUsuario(this.editando.id, this.editando).subscribe({
      next: () => { this.mensaje = 'Usuario actualizado.'; this.panel = 'ninguno'; this.cargar(); },
      error: err => this.error = err?.error?.mensaje || 'Error al actualizar.'
    });
  }

  eliminar(id: number) {
    if (!confirm('¿Eliminar este usuario?')) return;
    this.usuarioService.eliminarUsuario(id).subscribe({
      next: () => { this.mensaje = 'Usuario eliminado.'; this.cargar(); },
      error: () => this.error = 'Error al eliminar.'
    });
  }
}