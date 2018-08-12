import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RuteadorModule } from './ruteador/ruteador.module';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { RegistroEntrenamientoComponent } from './registro-entrenamiento/registro-entrenamiento.component';
import { VerEntrenamientosComponent } from './ver-entrenamientos/ver-entrenamientos.component';
import { SelectorFormComponentComponent } from './form-components/selector-form-component/selector-form-component.component';
import { BarraPasadaVelocidadComponent } from './registro-entrenamiento/barra-pasada-velocidad/barra-pasada-velocidad.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    RegistroEntrenamientoComponent,
    VerEntrenamientosComponent,
    SelectorFormComponentComponent,
    BarraPasadaVelocidadComponent
  ],
  imports: [
    BrowserModule,
    RuteadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
