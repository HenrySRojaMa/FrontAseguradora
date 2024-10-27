import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AseguradorasComponent } from './aseguradoras/aseguradoras.component';
import { ContratosComponent } from './contratos/contratos.component';

const routes: Routes = [
  {
      path: "",
      component: HomeComponent,
      pathMatch: "full"
  },
  {
      path: "clientes",
      component: ClientesComponent
  },
  {
      path: "aseguradoras",
      component: AseguradorasComponent
  },
  {
      path: "contratos",
      component: ContratosComponent
  },
  {
      path: "**",
      redirectTo: ""
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
