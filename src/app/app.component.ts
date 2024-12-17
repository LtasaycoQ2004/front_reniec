import { Component } from '@angular/core';
import { DniModel, ReniecServiceService } from './service/reniec-service.service';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Asegúrate de importar HttpClientModule aquí

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reniec_hackathon';

  dnis: DniModel[] = [];  // Para almacenar los DNI
  estado: string = 'A';    // 'A' para activos, 'I' para inactivos

  constructor(private dniService: ReniecServiceService) { }

  ngOnInit(): void {
    this.obtenerDnis();  // Obtener los DNI por defecto, activos
  }

  // Función para obtener los DNI según el estado
  obtenerDnis(): void {
    if (this.estado === 'A') {
      this.dniService.getDnisActivos().subscribe(data => {
        this.dnis = data;
      });
    } else if (this.estado === 'I') {
      this.dniService.getDnisInactivos().subscribe(data => {
        this.dnis = data;
      });
    }
  }

  // Cambiar el estado para listar activos o inactivos
  cambiarEstado(estado: string): void {
    this.estado = estado;
    this.obtenerDnis();
  }
}
