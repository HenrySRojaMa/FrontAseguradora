import { Component } from '@angular/core';
import { ApiaseguradoraService } from '../apiaseguradora.service';
import { Cliente, Seguro } from '../interfaces/responses.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  contrato!: Seguro[];
  asegurados!: Cliente[];
  cedula: string = "";
  codigo: string = "";
  buttonDisable: boolean = false;

  constructor(private _apiService: ApiaseguradoraService){}

  getContract(){
    this._apiService.listClientContracts(this.cedula)
    .subscribe((data) => {
      this.contrato = data.data;
    }, err => {
      alert("Error de coneccion con el servidor");
      console.log(err);
    });
  }

  getClients(){
    this._apiService.listInsurerClients(this.codigo)
    .subscribe((data) => {
      this.asegurados = data.data;
    }, err => {
      alert("Error de coneccion con el servidor");
      console.log(err);
    });
  }

}
