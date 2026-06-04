<<<<<<< HEAD
export interface PedidoModel {
  id: number;
  mesaId: number;
  estado: string;
  fecha: string;
}
=======
export interface PedidoPlatoModel {
    pedidoId: number;
    platoId: number;
    cantidad: number;
}
export interface PedidoModel {
    id?: number;
    mesaId: number;
    usuarioId?: number;
    estado?: string;
    creadoEn?: string;
    pedidoPlatos?: PedidoPlatoModel[];
}
>>>>>>> 231e3970ecbbae4c590ae37fd3b46042c89b7ff0
