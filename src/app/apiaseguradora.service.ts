import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Respuesta } from './interfaces/responses.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiaseguradoraService {

  private host: string = "https://localhost:7098/"

  constructor(private http: HttpClient) { }

  uploadFile(form:FormData):Observable<Respuesta<string>> {
    return this.http.post<Respuesta<string>>(`${this.host}api/Client/import`,form);
  } 
}
