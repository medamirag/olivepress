import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
baseURL=environment.baseUrl;
  constructor(private httpClient:HttpClient) { 
    
  }
  getAllClients():Observable<Client[]>{
return this.httpClient.get<Client[]>(this.baseURL+"clients")
  }
}
