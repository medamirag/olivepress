import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-fiche-client',
  templateUrl: './fiche-client.component.html',
  styleUrls: ['./fiche-client.component.scss']
})
export class FicheClientComponent implements OnInit {
client:Client={name:'',id:0,telephone:''};
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    const id: any = sessionStorage.getItem("idClient");
    
    this.clientService.getClient(id).subscribe(data=>this.client=data)
  }

}
