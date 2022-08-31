import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Documents } from '../models/documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
newDocument!:Documents;
baseUrl=environment.baseUrl;
  constructor(private httpClient:HttpClient) { }


  getAllDocumentByClient_Type(idclient:string,Type:string):Observable<any[]>{
    console.log("http://localhost:3000/api/v0/documents/"+idclient+"/"+Type);
    
    return this.httpClient.get<any>("http://localhost:3000/api/v0/documents/"+idclient+"/"+Type)

  }
  addDocument(document:Documents):Observable<Documents>{
    console.log(document)
    return this.httpClient.post<Documents>(this.baseUrl+'document/add',document)

  }
}
