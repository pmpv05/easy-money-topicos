import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngresoVoluntadComponent } from './components/ingreso-voluntad/ingreso-voluntad.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ingreso-voluntad', component: IngresoVoluntadComponent },
  { path: 'transaccion', component: TransaccionComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
