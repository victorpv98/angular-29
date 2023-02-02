import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Inter } from '../models/inter';

@Injectable({
  providedIn: 'root'
})
export class AlluserService {

  // Declarando instancia para los metodos get, post y delete
  constructor(private http: HttpClient) { }

  getAll(): Observable<Inter[]>{
    const rutaVista = environment.apiUrl + 'vista/';
    return this.http.get<Inter[]>(rutaVista);
  }

  postNuevo(user: Inter):Observable<Inter>{
    const rutAgregar = environment.apiUrl+'nuevo/';
    return this.http.post<Inter>(rutAgregar, user);
  }

  delete(id: number):Observable<string>{
    const rutaEli = environment.apiUrl + 'eliminar/' + id;
    return this.http.delete<string>(rutaEli);

  }
}
