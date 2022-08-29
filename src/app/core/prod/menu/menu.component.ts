import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  idClient :any
  constructor() {
    this.idClient=sessionStorage.getItem("idClient")
   }

  ngOnInit(): void {
  }
  setSessionStorage(num:string){
    sessionStorage.setItem("tableActif",num)
  }

}
