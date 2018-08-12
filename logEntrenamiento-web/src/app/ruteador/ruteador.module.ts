import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {RegistroEntrenamientoComponent} from '../registro-entrenamiento/registro-entrenamiento.component';
import {VerEntrenamientosComponent} from '../ver-entrenamientos/ver-entrenamientos.component';

const rutas: Routes = [
  {path: 'registrar-entrenamiento', component: RegistroEntrenamientoComponent},
  {path: 'ver-entrenamientos', component: VerEntrenamientosComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [ RouterModule ]
})
export class RuteadorModule { }
