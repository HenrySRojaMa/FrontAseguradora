import { Component, OnInit } from '@angular/core';
import { ApiaseguradoraService } from '../apiaseguradora.service';
import { Cliente } from '../interfaces/responses.interfaces';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  asegurados!: Cliente[];

  constructor(private _apiService: ApiaseguradoraService){}

  onFileSelected(event: any): void {
    
    const file: File = event.target.files[0];//Seleccionar archivo 
    if (file) {
      const formData = new FormData();//definir Form Data
      formData.append('file', file);
      this._apiService.uploadFile(formData)
      .subscribe((data) => {
          alert(data.message);
          this.listClients();
        }, err => {
          alert("Error de coneccion con el servidor");
          console.log(err);
        });
    }
  }

  ngOnInit(): void {
    this.listClients()
  }

  listClients(){
    this._apiService.listClients()
    .subscribe((data) => {
      this.asegurados = data.data;
    }, err => {
      alert("Error de coneccion con el servidor");
      console.log(err);
    });
  }

  deleteClient(idCliente: number){
    this._apiService.deleteClient(idCliente)
    .subscribe((data) => {
      alert(data.message);
      this.listClients();
    }, err => {
      alert("Error de coneccion con el servidor");
      console.log(err);
    });
  }

}
