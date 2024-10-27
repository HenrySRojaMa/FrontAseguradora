import { Component } from '@angular/core';
import { ApiaseguradoraService } from '../apiaseguradora.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _apiService: ApiaseguradoraService){}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];//Seleccionar archivo 
    if (file) {
      const formData = new FormData();//definir Form Data
      formData.append('file', file);
      this._apiService.uploadFile(formData)
      .subscribe((data) => {
          alert(data.message);
        }, err => {
          alert("Error de coneccion con el servidor");
          console.log(err);
        });
    }
  }

}
