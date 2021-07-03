import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Item } from '../models/item';
import { BehaviorSubject } from 'rxjs'; 
import { map } from 'rxjs/operators';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

//  private baseUrl = 'http://localhost:3000/api';
//  private baseUrl = 'http://127.0.0.1:8000';
//  private baseUrl = 'http://localhost:8088/api';


add_data(item : Item) 
{
    // return this.http.post(`${this.baseUrl}/item`, item);
    
    // var headers = new HttpHeaders()
    // headers.append("content-type", "application/json")
    // return this.http.post(`${this.baseUrl}/item`, item, {headers:headers})    

    // return this.http.post(this.baseUrl + '/items/', item)
	
}

get_data(): Observable<any>  
{
    // return this.http.get<Item[]>(`${this.baseUrl}/items`)

    // return this.http.get<any[]>(`${this.baseUrl}/items`)

    // return this.http.get<any[]>(`${this.baseUrl}/items`) ;
}

delete_data(id : Number)
{
  //  return this.http.delete(`${this.baseUrl}/item/${id}` )
  //  return this.http.delete(`${this.baseUrl}/item/` + id)
  //  return this.http.delete(this.baseUrl + '/item/' + id)   
}

}
