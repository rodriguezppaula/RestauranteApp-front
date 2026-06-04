import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaModel } from '../../models/categoria.model/categoria.model';

@Injectable({ providedIn: 'root' })
export class CategoriaService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7166/api/Categorias';

  obtenerCategorias(): Observable<CategoriaModel[]> {
    return this.http.get<CategoriaModel[]>(this.apiUrl);
  }

  obtenerCategoriaPorId(id: number): Observable<CategoriaModel> {
    return this.http.get<CategoriaModel>(`${this.apiUrl}/${id}`);
  }

  crearCategoria(categoria: CategoriaModel): Observable<CategoriaModel> {
    return this.http.post<CategoriaModel>(this.apiUrl, categoria);
  }

  // OJO: el PUT requiere que el body incluya el id (el backend lo valida)
  actualizarCategoria(id: number, categoria: CategoriaModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, { ...categoria, id });
  }

  eliminarCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}