import {
  Component,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HelperServiceService } from '../../servicios/helper-service.service';
import { TablaRecepcionService } from '../../servicios/tabla-recepcion.service';


@Component({
  selector: 'app-tabla-vendedor',
  templateUrl: './tabla-vendedor.component.html',
  styleUrls: ['./tabla-vendedor.component.css'],
  providers: [HelperServiceService],
})
export class TablaVendedorComponent implements OnInit {

  messageVenta!: string;
  getHoraIngreso!: any;

  constructor(
    private helperService: HelperServiceService,
  ) {

  }

  ngOnInit(): void {
    this.helperService.customMessage.subscribe(
      (msg) => (this.messageVenta = msg)
    );

    this.getHoraIngresoVendedor();
  }

  getHoraIngresoVendedor() {
    this.helperService.getHoraIngreso().subscribe((res) => {
      this.getHoraIngreso = res;
    });
  }

}
