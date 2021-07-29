import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  private url:string = environment.BACKEND_HTTPS_SERVER;
  private endpoint:string = "orders";

  constructor(private http: HttpClient) { }

  getOrderById(id: number) {
    return this.http
      .get<any>(this.url+this.endpoint+'/'+id)
  } 
  
}
