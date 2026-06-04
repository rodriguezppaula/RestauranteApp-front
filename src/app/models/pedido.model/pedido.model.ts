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
