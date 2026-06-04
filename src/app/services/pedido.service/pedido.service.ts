import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PedidoModel } from '../../models/pedido.model/pedido.model';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:7166/api/Pedidos';

  obtenerPedidos(): Observable<PedidoModel[]> {
    return this.http.get<PedidoModel[]>(this.apiUrl);
  }

  obtenerPedidoPorId(id: number): Observable<PedidoModel> {
    return this.http.get<PedidoModel>(`${this.apiUrl}/${id}`);
  }

  // Solo necesita mesaId; el usuarioId lo toma del JWT en el backend
  crearPedido(mesaId: number): Observable<PedidoModel> {
    return this.http.post<PedidoModel>(this.apiUrl, { mesaId });
  }

  agregarPlato(pedidoId: number, platoId: number, cantidad: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${pedidoId}/platos`, { platoId, cantidad });
  }

  cambiarEstado(pedidoId: number, estado: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${pedidoId}/estado`, { estado });
  }

  eliminarPedido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}