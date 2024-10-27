import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Respuesta, Seguro } from './interfaces/responses.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiaseguradoraService {

  private host: string = "https://localhost:7098/"

  constructor(private http: HttpClient) { }

  uploadFile(form:FormData):Observable<Respuesta<string>> {
    return this.http.post<Respuesta<string>>(`${this.host}api/Client/import`,form);
  } 

  listClientContracts(cedula: string):Observable<Respuesta<Seguro[]>> {
    return this.http.get<Respuesta<Seguro[]>>(`${this.host}api/Contract/ListClientContracts?cedula=${cedula}`);
  } 

  listInsurerClients(codigo: string):Observable<Respuesta<Cliente[]>> {
    return this.http.get<Respuesta<Cliente[]>>(`${this.host}api/Contract/ListInsurerClients?Codigo=${codigo}`);
  } 

  listClients():Observable<Respuesta<Cliente[]>> {
    return this.http.get<Respuesta<Cliente[]>>(`${this.host}api/Client/list`);
  } 

  deleteClient(idCliente: number):Observable<Respuesta<string>> {
    return this.http.get<Respuesta<string>>(`${this.host}api/Client/delete?IdSeguro=${idCliente}`);
  } 
}
