import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepcionComponent } from './componentes/recepcion/recepcion.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';


const routes: Routes = [
   
  { path: 'recepcion', component: RecepcionComponent},
  { path: 'venta', component: VendedorComponent },
  { path: '', redirectTo: 'venta', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
