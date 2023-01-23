import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecepcionComponent } from './componentes/recepcion/recepcion.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [
   
  { path: 'login', component: InicioComponent },
  { path: 'recepcion', component: RecepcionComponent/*, canActivate:[GuardGuard]*/},
 // { path: 'venta/:id', component: VendedorComponent },
 { path: 'venta', component: VendedorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
