import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tableActif:any
  idClient:any
  constructor() { 
   
    this.tableActif=sessionStorage.getItem("tableActif")
    this.idClient=sessionStorage.getItem("idClient");

  }

  ngOnInit(): void {
  }
  getTableActif(){
this.tableActif=sessionStorage.getItem("tableActif")
console.log(this.tableActif);

  }

}
