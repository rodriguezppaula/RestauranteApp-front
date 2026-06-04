import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MesaModel } from '../../models/mesa.model/mesa.model';

@Injectable({ providedIn: 'root' })
export class MesaService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7166/api/Mesas';

  obtenerMesas(): Observable<MesaModel[]> {
    return this.http.get<MesaModel[]>(this.apiUrl);
  }

  obtenerMesaPorId(id: number): Observable<MesaModel> {
    return this.http.get<MesaModel>(`${this.apiUrl}/${id}`);
  }

  crearMesa(mesa: MesaModel): Observable<MesaModel> {
    return this.http.post<MesaModel>(this.apiUrl, mesa);
  }

  actualizarMesa(id: number, mesa: MesaModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, mesa);
  }

  eliminarMesa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}