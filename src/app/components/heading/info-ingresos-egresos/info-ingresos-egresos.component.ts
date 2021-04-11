import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-ingresos-egresos',
  templateUrl: './info-ingresos-egresos.component.html',
  styleUrls: ['./info-ingresos-egresos.component.css']
})
export class InfoIngresosEgresosComponent implements OnInit {
  @Input() text: 'Ingresos' | 'Egresos';
  @Input() quantity: number;
  @Input() percentage: number;
  esIngreso: boolean;

  constructor() { }

  ngOnInit(): void {
    this.percentage /= 100;
    this.esIngreso = this.text === 'Ingresos';
  }

}
