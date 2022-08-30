import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { Documents } from 'src/app/models/documents';
import { ClientService } from 'src/app/services/client.service';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-liste-document',
  templateUrl: './liste-document.component.html',
  styleUrls: ['./liste-document.component.scss'],
})
export class ListeDocumentComponent implements OnInit {
  @Input() tableActif: number;
  @Input() idClient: number;
  listClients!: Client[];
  listBR!:Documents[];
  listBE!:Documents[];
  listF!:Documents[];
 sommeBR!:number;
  sommeBE!:number;
  sommeF!:number;
  constructor(private router: Router, private clientService: ClientService,private documentsService:DocumentService) {
    this.tableActif = Number(sessionStorage.getItem("tableActif"))
    this.idClient = Number(sessionStorage.getItem("idClient"))
  
  }

  ngOnInit(): void {
    this.getAllClients();
    this.getAllBonReception();
    this. getAllBonExtraction();
    this.getAllFactures();
  }
  ngOnChanges(): void {
    this.tableActif = Number(sessionStorage.getItem("tableActif"));
    this.idClient = Number(sessionStorage.getItem("idClient"));
    this.getAllBonReception();
    this. getAllBonExtraction();
    this.getAllFactures();
    console.log("activated");
    console.log("idClient" + this.idClient);

  }
  setClient(id: number) {
    sessionStorage.setItem("idClient", id + "")
    sessionStorage.setItem("tableActif", "1")

    this.router.navigate(['/press/' + id])
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(data => {
      this.listClients = data;
      console.log(data);
    });
  }
getAllBonReception(){
  
  this.documentsService.getAllDocumentByClient_Type(this.idClient.toString(),"R").subscribe(data=>{this.listBR=data[0]
  ;console.log(data);
  console.log(this.listBR);
  this.sommeBR=data[1].somme ;console.log("somme",this.sommeBR)
  
  })
}


  getAllBonExtraction(){
    this.documentsService.getAllDocumentByClient_Type(this.idClient+"","E").subscribe(data=>{this.listBE=data[0]; 
    this.sommeBE=data[1].somme ;console.log("somme",this.sommeBE)}
    
      );

  }

  getAllFactures(){
    this.documentsService.getAllDocumentByClient_Type(this.idClient.toString(),"F").subscribe
    (data=>
      {this.listF=data[0];
        console.log(data);
        this.sommeF=data[1].somme ;console.log("somme",this.sommeF)
      }
      )
    ;
  }



}
