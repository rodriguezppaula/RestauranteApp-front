import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlatoModel } from '../../models/plato.model/plato.model';

@Injectable({ providedIn: 'root' })
export class PlatoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7166/api/Platos';

  obtenerPlatos(): Observable<PlatoModel[]> {
    return this.http.get<PlatoModel[]>(this.apiUrl);
  }

  obtenerPlatoPorId(id: number): Observable<PlatoModel> {
    return this.http.get<PlatoModel>(`${this.apiUrl}/${id}`);
  }

  // OJO: el PUT valida que id del body coincida con el de la URL
  crearPlato(plato: PlatoModel): Observable<PlatoModel> {
    return this.http.post<PlatoModel>(this.apiUrl, plato);
  }

  actualizarPlato(id: number, plato: PlatoModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, { ...plato, id });
  }

  eliminarPlato(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}