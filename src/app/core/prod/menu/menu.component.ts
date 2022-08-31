import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  idClient :any
  constructor(private route:Router) {
    this.idClient=sessionStorage.getItem("idClient")
   }

  ngOnInit(): void {
  }
  setSessionStorage(num:string){
    sessionStorage.setItem("tableActif",num);
    if(num!=='4'){
    this.route.navigate(['/press/'+this.idClient])
    }else
    {
      this.route.navigate(['/press'])

    }
  }

}
