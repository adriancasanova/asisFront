import { Component, OnInit } from '@angular/core';
import { HelperServiceService } from 'src/app/servicios/helper-service.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
})
export class VendedorComponent implements OnInit {
  mensaje!: string;
  messageVenta!: string;

  constructor(private helperService: HelperServiceService) {}

  ngOnInit(): void {
    this.helperService.customMessage.subscribe(
      (msg) => (this.messageVenta = msg)
    );
  }
}
