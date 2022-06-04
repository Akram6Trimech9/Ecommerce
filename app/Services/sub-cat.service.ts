import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCatService {
  url = 'http://127.0.0.1:3000/subcategory';
  constructor(private http:HttpClient) { }
   
 getAllsubcAtegory():Observable<any>{
   return this.http.get<any>(`${this.url}/`)
 }
 postSubcategory(subcat:any,id:any):Observable<any>{
   return this.http.post<any>(`${this.url}/add/${id}`,subcat)
 }
 deleteSubcat(id:any):Observable<any>{
   return this.http.delete<any>(`${this.url}/add/${id}`)
 }
}
