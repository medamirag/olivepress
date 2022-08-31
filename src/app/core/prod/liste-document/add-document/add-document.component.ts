import { Component, OnInit } from '@angular/core';
import { Documents } from 'src/app/models/documents';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {
newDoc!:Documents;
code!:string;
cnt!:number[];
qte!:number;
id:any=sessionStorage.getItem('idClient')
  constructor(private docService:DocumentService) {
    console.log("okkkkk");
   }

  ngOnInit(): void {
    console.log("okkkkk");
    
  }
  addDocument(){
    this.newDoc={code:this.code,contenaire:[1,2],quantiteOlive:this.qte,uniteOlive:'kg',dateReception:new Date(),
  type:'R',idClient:this.id,status:true};
  this.docService.addDocument(this.newDoc).subscribe(data=>{
    console.log("success");
    
  })
  console.log(this.newDoc);
  



  }

}
