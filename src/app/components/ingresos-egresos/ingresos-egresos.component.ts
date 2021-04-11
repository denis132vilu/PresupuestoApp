import { Component, OnInit } from '@angular/core';
import { IPresupuestoDetalleInterface } from 'src/app/interfaces/presupuesto-detalle.interface';
import { DataPresupuestoService } from 'src/app/services/data-presupuesto.service';

@Component({
  selector: 'app-ingresos-egresos',
  templateUrl: './ingresos-egresos.component.html',
  styleUrls: ['./ingresos-egresos.component.css']
})
export class IngresosEgresosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
