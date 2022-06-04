import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
   url = 'http://127.0.0.1:3000/user';
      helper = new JwtHelperService();

  constructor(private http: HttpClient) { }
  Signup(user:any):Observable<any>{
      return this.http.post<any>(`${this.url}/signup`,user)
  }
  login(obj:any):Observable<any>{
    return this.http.post<any>(`${this.url}/login`,obj)
  }
  getClienbyid(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/getuser/${id}`)
  }
  getuser():Observable<any>{
 return this.http.get<any>(`${this.url}/getclients`)
  }
  Isloggedin:Boolean=false; 
  SaveToken(token:any){
    let decodeToken=this.helper.decodeToken(token)
    localStorage.setItem('token',token)
    localStorage.setItem('username',decodeToken.nom) 
    localStorage.setItem('role',decodeToken.role)
      this.Isloggedin=true;
  }
  getuserName(){
    return localStorage.getItem('username')
  }
  Token:any; 

  getuserid(){
     this.Token = localStorage.getItem('token')
     let decodeToken=this.helper.decodeToken(this.Token)
       return decodeToken.user_id
  }
  LoggedIn():Observable<boolean>{
    let token :any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)
    if(decodeToken.role!=='client'){
      return of(false) 
    }
    if(this.helper.isTokenExpired(token)){
      return of(false) 
    }
    return of(false) 
  }
  Logout(){
    //  localStorage.removeItem('token')
    // localStorage.removeItem('nom')
    // localStorage.removeItem('role') 
    localStorage.clear();
  }

 }