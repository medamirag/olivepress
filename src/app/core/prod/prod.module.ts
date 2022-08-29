import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdRoutingModule } from './prod-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FicheClientComponent } from './fiche-client/fiche-client.component';
import { ListeDocumentComponent } from './liste-document/liste-document.component';
import { ResumeDocumentComponent } from './resume-document/resume-document.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BonReceptionComponent } from './liste-document/bon-reception/bon-reception.component';


@NgModule({
  declarations: [
    MenuComponent,
    FicheClientComponent,
    ListeDocumentComponent,
    ResumeDocumentComponent,
    ListeClientsComponent,
    DashboardComponent,
    BonReceptionComponent
  ],
  imports: [
    CommonModule,
    ProdRoutingModule
  ]
})
export class ProdModule { }
