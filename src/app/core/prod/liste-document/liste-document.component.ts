import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-liste-document',
  templateUrl: './liste-document.component.html',
  styleUrls: ['./liste-document.component.scss']
})
export class ListeDocumentComponent implements OnInit {
  @Input() tableActif: number;
  @Input() idClient: number;
  listClients!: Client[]
  constructor(private router: Router, private clientService: ClientService) {
    this.tableActif = Number(sessionStorage.getItem("tableActif"))
    this.idClient = Number(sessionStorage.getItem("idClient"))

  }

  ngOnInit(): void {
    this.getAllClients()
  }
  ngOnChanges(): void {
    this.tableActif = Number(sessionStorage.getItem("tableActif"))
    this.idClient = Number(sessionStorage.getItem("idClient"))
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
}
