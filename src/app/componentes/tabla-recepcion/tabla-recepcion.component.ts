import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IngresoPersona } from 'src/app/ingresoPersona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HelperServiceService } from 'src/app/servicios/helper-service.service';
import { TablaRecepcionService } from 'src/app/servicios/tabla-recepcion.service';
import {
  BooksActions,
  BooksApiActions,
} from 'src/app/state/actions/items.actions';
import { selectBooks } from 'src/app/state/selectors/items.selectors';
//import { loadedItems, loadItems } from 'src/app/state/actions/items.actions';
//import { selectListItems, selectLoading } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-tabla-recepcion',
  templateUrl: './tabla-recepcion.component.html',
  styleUrls: ['./tabla-recepcion.component.css'],
})
export class TablaRecepcionComponent implements OnInit {
  messageVenta!: string;
  editMessage!: string;
  @Input() textFromParent!: any;
  getHoraIngreso!: any;
  message!: string;

  //@Input() books: ReadonlyArray<IngresoPersona> = [];
  // books$ = this.store.select(selectBooks);

  receiveMessage(event: any) {
    this.getRecepcionPersona();
    this.message = event;
  }

  ingresoPersona!: IngresoPersona;

  inputBuscar = '';
  filterPost = '';
  ingresoPersonaModel: IngresoPersona = new IngresoPersona();
  formValue!: FormGroup;
  formValueAgregar!: FormGroup;
  recepcionData!: any;
  userData: any;
  loading$: Observable<void> = new Observable();
  @Output() add = new EventEmitter<string>();
  //loading$: Observable<any> = new  Observable()
  @Input() data: any;
  constructor(
    private tablaRecepcionService: TablaRecepcionService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder,
    private render2: Renderer2,
    private helperService: HelperServiceService,
    private router: Router,
    private store: Store<any>,
   
  ) {
    //this.loading$ = this.store.select(selectListItems)
  }

  ngOnInit(): void {
    this.helperService.customMessage.subscribe(
      (msg) => (this.messageVenta = msg)
    );
    this.getRecepcionPersona();
    this.getHoraIngresoVendedor();

    /*
    this.loading$ = this.store.select(selectLoading)//TODO: true, false

    this.store.dispatch(loadItems()) //TODO🔴
    */
  }

  getHoraIngresoVendedor() {
    this.helperService.getHoraIngreso().subscribe((res) => {
      this.getHoraIngreso = res;
    });
  }

  notificarTurnoVendedor() {
    let array = this.getHoraIngreso;
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);

      this.editMessage = array[i];
      this.changeMessage();
      /*  this.helperService.deleteHoraIngreso(array[i].id).subscribe(res => {
              this.getHoraIngresoVendedor();                   
              
            }) */
      console.log(" edit message" + JSON.stringify(this.editMessage));
     // this.store.select(BooksActions.addBook);
      break;
    }
  }

  changeMessage() {
    this.helperService.changeMessage(this.editMessage);
  }

  getRecepcionPersona() {
    this.tablaRecepcionService.getTablaRecepcion().subscribe((res: any) => {
      // this.recepcionData = res;
      //  this.store.dispatch(loadedItems({items: res}))
      this.store.dispatch(BooksApiActions.retrievedBookList(res));
      this.recepcionData = res;
    });
  }

  @ViewChild('actualizacionDeEstado', { static: false })
  divActualizacionDeEstado!: ElementRef;

  clicklistenerProspecto: any;

  public inputContentProspecto: any;

  ngAfterViewInit() {
    // Escuchando el select personalizado de tipo de prospecto
    this.clicklistenerProspecto = this.render2.listen(
      this.divActualizacionDeEstado.nativeElement,
      'change',
      (evt) => {
        this.inputContentProspecto = document.querySelector('.algo');
        console.log('el valor es:' + this.inputContentProspecto.value);
        this.inputContentProspecto.blur();
      }
    );
  }
}
