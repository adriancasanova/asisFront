import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecepcionComponent } from './componentes/recepcion/recepcion.component';
import { TablaRecepcionComponent } from './componentes/tabla-recepcion/tabla-recepcion.component';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';
import { TablaVendedorComponent } from './componentes/tabla-vendedor/tabla-vendedor.component';
import { HelperServiceService } from './servicios/helper-service.service';


@NgModule({
  declarations: [
    AppComponent,
    RecepcionComponent,
    TablaRecepcionComponent,
    VendedorComponent,
    TablaVendedorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HelperServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
