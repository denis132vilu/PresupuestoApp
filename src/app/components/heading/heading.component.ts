import { Component, Input, OnInit } from '@angular/core';
import { IPresupuestoInterface } from 'src/app/interfaces/prespupesto.interface';
import { DataPresupuestoService } from 'src/app/services/data-presupuesto.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
  presupuesto: IPresupuestoInterface;
  constructor(
    private dataPresupuestoService: DataPresupuestoService,
  ) {
    this.presupuesto = this.dataPresupuestoService.presupuesto;
  }

  ngOnInit(): void {}

  calcularPorcentaje(baseInicial: number, baseParaPorcentaje: number): number {
    return (baseInicial / baseParaPorcentaje) * 100;
  }
}
