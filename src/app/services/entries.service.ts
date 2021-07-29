import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Entry } from '../models/entry.model';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  private url:string = environment.BACKEND_HTTPS_SERVER;
  private endpoint:string = "entries";

  constructor(private http: HttpClient) { }

  getEntriesByOrderId(id: number) {
    return this.http
      .get<any>(this.url+this.endpoint+'/'+id)
  } 

  createNewEntry(newEntry: Entry) {
    return this.http
      .post(this.url+this.endpoint, {
        ...newEntry
      })
  }

}
