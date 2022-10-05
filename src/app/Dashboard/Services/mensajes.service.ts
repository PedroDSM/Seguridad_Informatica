import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mensajes, Respuesta } from 'src/app/Dashboard/Interfaces/mensajes';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{  
    return this.http.get<Respuesta>(environment.urlBase+'/posts')
  }

  getIp(): Observable<any>{
    // return this.http.get<any>("https://ipgeolocation.abstractapi.com/v1/?api_key=61274fa321df46a6a0b00a785a3e00fe")
    return this.http.get<any>("https://ipgeolocation.abstractapi.com/v1/?api_key=d4ea0b09ec294b2fba5cedb6a606a946")
  }
  new(info:any): Observable<any>{  
    return this.http.post<any>(environment.urlBase+'/posts',info)
  }
}
