import { Injectable } from '@angular/core';
import { IPresupuestoInterface } from '../interfaces/prespupesto.interface';
import { IPresupuestoDetalleInterface } from '../interfaces/presupuesto-detalle.interface';

@Injectable({
  providedIn: 'root'
})
export class DataPresupuestoService {
  presupuesto: IPresupuestoInterface = {
    egresos: 0,
    ingresos: 0,
  };
  presupuestoDetalles: IPresupuestoDetalleInterface[];

  constructor() {
    this.presupuestoDetalles = [];
    this.initializePresupuesto();
  }

  initializePresupuesto(): void {
    this.agregarDetalle({
      tipo: 'Ingreso', descripcion: 'Salario', valor: 18000,
    });
    this.agregarDetalle({
      tipo: 'Ingreso', descripcion: 'Venta Coche', valor: 60000,
    });
    this.agregarDetalle({
      tipo: 'Egreso', descripcion: 'Renta Dpto.', valor: 1600,
    });
    this.agregarDetalle({
      tipo: 'Egreso', descripcion: 'Ropa', valor: 500,
    });
  }

  agregarDetalle(detalle: IPresupuestoDetalleInterface): void {
    this.presupuestoDetalles.push(detalle);
    detalle.tipo === 'Ingreso' ?
      this.presupuesto.ingresos += detalle.valor :
      this.presupuesto.egresos += detalle.valor;
  }

  eliminarDetalle(detalle: IPresupuestoDetalleInterface, index: number): void {
    let nuevosDetalles = this.presupuestoDetalles.filter((detail, idx) => {
      if (index === idx && detalle === detail) {
        detalle.tipo === 'Ingreso' ?
          this.presupuesto.ingresos -= detalle.valor :
          this.presupuesto.egresos -= detalle.valor;
      }
      return detalle.descripcion !== detail.descripcion || detail.tipo !== detalle.tipo || detalle.valor !== detail.valor;
    });
    this.presupuestoDetalles = nuevosDetalles;
    console.log(this.presupuestoDetalles)
  }

  getPresupuestoDetalle(presupuesto?: IPresupuestoDetalleInterface): IPresupuestoDetalleInterface {
    return {
      tipo: presupuesto?.tipo || 'Ingreso', descripcion: presupuesto?.descripcion || '', valor: presupuesto?.valor || 0,
    };
  }

}
