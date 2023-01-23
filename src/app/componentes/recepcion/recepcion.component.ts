import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TablaRecepcionService } from 'src/app/servicios/tabla-recepcion.service';
@Component({
  selector: 'app-recepcion',
  templateUrl: './recepcion.component.html',
  styleUrls: ['./recepcion.component.css'],
})
export class RecepcionComponent implements OnInit {
  userData!: any;
  recepcionData: any;
  constructor(
    private tablaRecepcionService: TablaRecepcionService,
    private ruta: Router
  ) {}

  ngOnInit(): void {
  
  }




}
