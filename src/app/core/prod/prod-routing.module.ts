import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ListeDocumentComponent } from './liste-document/liste-document.component';

const routes: Routes = [
  {path:':idclient',component:DashboardComponent},

  {path:'',component:DashboardComponent},
  {path:'listeclients',component:ListeClientsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdRoutingModule { }
