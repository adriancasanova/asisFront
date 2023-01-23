
import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { HelperServiceService } from 'src/app/servicios/helper-service.service';
import { TablaRecepcionService } from 'src/app/servicios/tabla-recepcion.service';


@Component({
  selector: 'app-tabla-recepcion',
  templateUrl: './tabla-recepcion.component.html',
  styleUrls: ['./tabla-recepcion.component.css'],
})
export class TablaRecepcionComponent implements OnInit {
  messageVenta!: string;
  editMessage!: string;
  getHoraIngreso!: any;
  message!: string;
  recepcionData!: any;


 
  @Input() data: any;
  constructor(
    private tablaRecepcionService: TablaRecepcionService,
    private helperService: HelperServiceService,   
  ) {
    
  }

  ngOnInit(): void {
    this.helperService.customMessage.subscribe(
      (msg) => (this.messageVenta = msg)
    );
    this.getRecepcionPersona();
    this.getHoraIngresoVendedor();

   
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
      this.editMessage = "mensaje de prueba porque no conecta con el back ya que esta en local"
      this.changeMessage();  
      break;
    }
  }

  changeMessage() {
    this.helperService.changeMessage(this.editMessage);
  }

  getRecepcionPersona() {
    this.tablaRecepcionService.getTablaRecepcion().subscribe((res: any) => {  
      this.recepcionData = res;
    });
  }




}
