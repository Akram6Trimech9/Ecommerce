import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {
  url = 'http://127.0.0.1:3000/category';
  constructor(private http:HttpClient) { }
getallCategories():Observable<any>{
return this.http.get<any>(`${this.url}/`)
}
getCategorybyid(id:any):Observable<any>{
  return this.http.get<any>(`${this.url}/${id}`)
}
postCategory(usercord:any):Observable<any>{
  return this.http.post<any>(`${this.url}/`,usercord)
}
updatecategory(id:any , category:any):Observable<any>{
  return this.http.patch(`${this.url}/${id}`,category)
}
}
