import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Optional,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HelperServiceService } from 'src/app/servicios/helper-service.service';
import { TablaRecepcionService } from 'src/app/servicios/tabla-recepcion.service';
import {
  BooksActions,
  BooksApiActions,
} from 'src/app/state/actions/items.actions';
import {
  selectBookCollection,
  selectBooks,
} from 'src/app/state/selectors/items.selectors';
import { TablaRecepcionComponent } from '../tabla-recepcion/tabla-recepcion.component';

@Component({
  selector: 'app-tabla-vendedor',
  templateUrl: './tabla-vendedor.component.html',
  styleUrls: ['./tabla-vendedor.component.css'],
  providers: [HelperServiceService],
})
export class TablaVendedorComponent implements OnInit {
  name!: string;
  Arrayturno!: string;
  turno!: any;
  rol!: any;
  message!: string;
  editMessage!: string;
  messageVenta!: string;
  getHoraIngreso!: any;
  usuarioActual!: any;
  @Input() childMessage!: string;

  currentUserSubject!: BehaviorSubject<any>;
  recepcionData: any;
  constructor(
    private helperService: HelperServiceService,
    private autenticacionService: AutenticacionService,
    @Optional() public component: TablaRecepcionComponent,
    private routerActive: ActivatedRoute,
    private store: Store,
    private tablaRecepcionService: TablaRecepcionService
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      sessionStorage.getItem('currentUser') || '{}'
    );
    this.rol = Object.values(this.currentUserSubject);
    let prueba = this.rol[6];
    this.name = JSON.parse(prueba)[2];
  }

  ngOnInit(): void {
    this.helperService.customMessage.subscribe(
      (msg) => (this.messageVenta = msg)
    );

    this.getHoraIngresoVendedor();

    this.getRecepcionPersona();
  }

  getHoraIngresoVendedor() {
    this.helperService.getHoraIngreso().subscribe((res) => {
      this.getHoraIngreso = res;

      let Arrayturno = this.getHoraIngreso;

      for (let i = 0; i < Arrayturno.length; i++) {
        if (Arrayturno[i].nombre == this.name) {
          this.turno = i + 1;
        }
      }
      if (this.turno == undefined) {
        console.log('es tu turno');
      }
    });
  }

  getRecepcionPersona() {
    this.tablaRecepcionService.getTablaRecepcion().subscribe((res: any) => {
      // this.recepcionData = res;
      //  this.store.dispatch(loadedItems({items: res}))
      this.store.dispatch(BooksApiActions.retrievedBookList(res));
      this.recepcionData = res;
    });
  }
}
