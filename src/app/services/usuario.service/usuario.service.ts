import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../../models/usuario.model/usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7166/api/Usuarios';

  obtenerUsuarios(): Observable<UsuarioModel[]> {
    return this.http.get<UsuarioModel[]>(this.apiUrl);
  }

  obtenerUsuarioPorId(id: number): Observable<UsuarioModel> {
    return this.http.get<UsuarioModel>(`${this.apiUrl}/${id}`);
  }

  actualizarUsuario(id: number, usuario: UsuarioModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, { ...usuario, id });
  }

  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}