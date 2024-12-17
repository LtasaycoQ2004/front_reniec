import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DniModel {
  id: number;
  dni: string;
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  codVerifica: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReniecServiceService {

  private baseUrl = 'https://effective-chainsaw-wrpxxpjw99jh5qw4-8080.app.github.dev/reniec/listar';  

  constructor(private http: HttpClient) { }

  // Obtener los DNI activos
  getDnisActivos(): Observable<DniModel[]> {
    return this.http.get<DniModel[]>(`${this.baseUrl}/A`);  // 'A' representa el estado activo
  }

  // Obtener los DNI inactivos
  getDnisInactivos(): Observable<DniModel[]> {
    return this.http.get<DniModel[]>(`${this.baseUrl}/I`);  // 'I' representa el estado inactivo
  }
}
