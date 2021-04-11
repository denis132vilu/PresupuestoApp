import { Component, Input, OnInit } from '@angular/core';
import { IPresupuestoInterface } from 'src/app/interfaces/prespupesto.interface';
import { IPresupuestoDetalleInterface } from 'src/app/interfaces/presupuesto-detalle.interface';
import { DataPresupuestoService } from 'src/app/services/data-presupuesto.service';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  @Input() title: 'Ingresos' | 'Egresos';
  detalles: IPresupuestoDetalleInterface[];
  presupuesto: IPresupuestoInterface;
  percentage: number;
  esIngreso: boolean;
  hoveredIndex: number;
  image: string;
  imageRedUrl: string = './assets/eliminar.png';
  imageBlueUrl: string = './assets/eliminar-blue.png';

  constructor(
    private dataPresupuestoService: DataPresupuestoService,
  ) { }

  ngOnInit(): void {
    this.esIngreso = this.title === 'Ingresos';
    this.detalles = this.dataPresupuestoService.presupuestoDetalles;
    this.presupuesto = this.dataPresupuestoService.presupuesto;
    this.image = this.esIngreso ? this.imageBlueUrl : this.imageRedUrl;
  }

  onHover(index: number): void {
    this.hoveredIndex = index;
  }

  onLeave(): void {
    this.hoveredIndex = -1;
  }

  eliminarDetalle(detalle: IPresupuestoDetalleInterface, index: number): void {
    this.dataPresupuestoService.eliminarDetalle(detalle, index);
    this.detalles = this.dataPresupuestoService.presupuestoDetalles;
    console.log('componente', this.title)
  }

}
