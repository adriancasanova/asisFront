import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HelperServiceService } from 'src/app/servicios/helper-service.service';
import { ArrayIngreso } from 'src/app/arrayIngreso';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  fechaactual = new Date().toLocaleTimeString();
  userData!: any;
  arrayHoraDeIngresoVendedor: any = [].sort();

  nombreVendedor!: any;
  private credenciales!: string;
  public loading!: boolean;
  public loginForm!: FormGroup;
  public rol!: any;
  rolDos: ArrayIngreso = new ArrayIngreso();
  nombre!: string;
  mensaje!: string;
  editMessage!: string;

  @ViewChild('alerta') pruebas!: ElementRef;
  @ViewChild('crearElemento') eyes!: ElementRef;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private ruta: Router,
    private autenticacionService: AutenticacionService,
    private render2: Renderer2,
    private helperService: HelperServiceService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    // this.helperService.customMessage.subscribe(msg => this.mensaje = msg);
  }

  get Email() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  login(event: Event) {
    this.loading = true;
    event.preventDefault;
    this.autenticacionService
      .iniciarSesion(this.loginForm.value)
      .subscribe((data) => {
        this.credenciales = data;

        this.rol = Object.values(data);
        for (let i = 0; i < 1; i++) {
          if (this.rol[0] === 'recepcionista') {
            this.ruta.navigate(['/recepcion']);
          }
          if (this.rol[0] === 'vendedor') {
            // this.ruta.navigate(['/venta', this.rol[2]]);
            this.ruta.navigate(['/venta']);
            this.horaLogueo(this.fechaactual);
            // this.arrayHoraDeIngresoVendedor.push(this.rol[2], this.fechaactual)
            this.nombre = this.rol[2];
          }
          // this.editMessage = this.arrayHoraDeIngresoVendedor;
          this.postHoraIngreso();
          //   this.changeMessage();

          //  }
        }
      });

    if (this.credenciales == null) {
      this.loading = false;
    }
  }

  postHoraIngreso() {
    this.rolDos.nombre = this.nombre;
    this.rolDos.hora = this.fechaactual;
    console.log(this.rolDos);
    this.helperService.postHoraIngreso(this.rolDos).subscribe((res) => {
      console.log(res);
    });
  }

  horaLogueo(fecha: any) {
    console.log(fecha);
  }
}
