import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../../models/usuario.model/usuario.model';

export interface CrearUsuarioDto {
  nombre:   string;
  email:    string;
  password: string;
  rol:      string;
}

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7166/api/Usuarios';
  private authUrl = 'https://localhost:7166/api/auth';

  obtenerUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(this.apiUrl);
  }

  obtenerUsuarioPorId(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.apiUrl}/${id}`);
  }

// Editar nombre, email y/o rol (solo Admin — protegido en backend)
  actualizarUsuario(id: number, usuario: UsuarioModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, { ...usuario, id });
  }

  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

    // Crear usuario con rol específico (solo accesible desde panel Admin)
  crearUsuario(datos: CrearUsuarioDto): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/register`, datos);
  }
}
