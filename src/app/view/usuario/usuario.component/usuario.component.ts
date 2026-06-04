<<<<<<< HEAD
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../services/usuario.service/usuario.service';
import { UsuarioModel } from '../../../models/usuario.model/usuario.model';

@Component({
  selector: 'app-usuario',
  imports: [CommonModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {
  private usuarioService = inject(UsuarioService);

  usuarios: UsuarioModel[] = [];
  mensaje = '';
  error = '';

  ngOnInit() { this.cargar(); }

  cargar() {
    this.usuarioService.obtenerUsuarios().subscribe({
      next: u => this.usuarios = u,
      error: () => this.error = 'Error al cargar usuarios.'
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
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario.component',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {}
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0
