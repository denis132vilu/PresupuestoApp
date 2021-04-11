export interface IPresupuestoDetalleInterface {
    tipo: 'Ingreso' | 'Egreso',
    descripcion: string,
    valor: number,
}