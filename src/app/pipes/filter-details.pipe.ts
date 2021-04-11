import { Pipe, PipeTransform } from '@angular/core';
import { IPresupuestoDetalleInterface } from '../interfaces/presupuesto-detalle.interface';

@Pipe({
  name: 'filterDetails'
})
export class FilterDetailsPipe implements PipeTransform {

  transform(detalles: IPresupuestoDetalleInterface[], esIngreso: boolean): IPresupuestoDetalleInterface[] {
    let tipo: 'Ingreso' | 'Egreso' = esIngreso ? 'Ingreso' : 'Egreso';
    return detalles.filter(detalle => {
      return detalle.tipo === tipo;
    });
  }

}
