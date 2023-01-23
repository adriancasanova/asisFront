import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AsideComponent } from './componentes/aside/aside.component';
import { LoginComponent } from './componentes/login/login.component';
import { RecepcionComponent } from './componentes/recepcion/recepcion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormularioIngresoComponent } from './componentes/formulario-ingreso/formulario-ingreso.component';
import { TablaRecepcionComponent } from './componentes/tabla-recepcion/tabla-recepcion.component';
import { InterceptorService } from './servicios/interceptor.service';
import { SelectService } from './servicios/select.service';
import { SelectAsideService } from './servicios/select-aside.service';
import { FilterPipe } from './pipes/filter.pipe';
import { VendedorComponent } from './componentes/vendedor/vendedor.component';
import { TablaVendedorComponent } from './componentes/tabla-vendedor/tabla-vendedor.component';
import { HelperServiceService } from './servicios/helper-service.service';
import { ActualizadorDirective } from './directivas/actualizador.directive';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { booksReducer } from '././state/reducers/items.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    LoginComponent,
    RecepcionComponent,
    InicioComponent,
    FormularioIngresoComponent,
    TablaRecepcionComponent,
    FilterPipe,
    VendedorComponent,
    TablaVendedorComponent,
    ActualizadorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    StoreModule.forRoot({ books: booksReducer }),
  ],
  providers: [
    RecepcionComponent,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    SelectService,
    SelectAsideService,
    HelperServiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
