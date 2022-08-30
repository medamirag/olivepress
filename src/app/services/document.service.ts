import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documents } from '../models/documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private httpClient:HttpClient) { }


  getAllDocumentByClient_Type(idclient:string,Type:string):Observable<any[]>{
    console.log("http://localhost:3000/api/v0/documents/"+idclient+"/"+Type);
    
    return this.httpClient.get<any>("http://localhost:3000/api/v0/documents/"+idclient+"/"+Type)

  }
}
