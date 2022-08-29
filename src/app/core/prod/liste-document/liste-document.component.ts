import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-liste-document',
  templateUrl: './liste-document.component.html',
  styleUrls: ['./liste-document.component.scss']
})
export class ListeDocumentComponent implements OnInit {
@Input() tableActif:number;
@Input() idClient:number;
  constructor(private router: Router) {
this.tableActif=Number(sessionStorage.getItem("tableActif"))
this.idClient=Number(sessionStorage.getItem("idClient"))

   }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    this.tableActif=Number(sessionStorage.getItem("tableActif"))
    this.idClient=Number(sessionStorage.getItem("idClient"))
    console.log("activated");
    console.log("idClient"+this.idClient);
    
  }
  setClient(id:number){
    sessionStorage.setItem("idClient",id+"")
    sessionStorage.setItem("tableActif","1")
    
  this.router.navigate(['/press/'+id])
  }

}
