import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadingComponent } from './components/heading/heading.component';
import { FormIngresoEgresoComponent } from './components/form-ingreso-egreso/form-ingreso-egreso.component';
import { InfoIngresosEgresosComponent } from './components/heading/info-ingresos-egresos/info-ingresos-egresos.component';
import { IngresosEgresosComponent } from './components/ingresos-egresos/ingresos-egresos.component';
import { DisplayDetailsComponent } from './components/ingresos-egresos/display-details/display-details.component';
import { DataPresupuestoService } from './services/data-presupuesto.service';
import { FilterDetailsPipe } from './pipes/filter-details.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    FormIngresoEgresoComponent,
    InfoIngresosEgresosComponent,
    IngresosEgresosComponent,
    DisplayDetailsComponent,
    FilterDetailsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataPresupuestoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
