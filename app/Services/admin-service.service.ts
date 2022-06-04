import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../Models/admin';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
   admin!:Admin ; 
  url = 'http://127.0.0.1:3000/user';
      helper = new JwtHelperService();

  constructor(private http: HttpClient) { }
  Signup(admin:any):Observable<any>{
      return this.http.post<any>(`${this.url}/signup`,admin)
  }
  login(obj:any):Observable<any>{
    return this.http.post<any>(`${this.url}/login`,obj)
  }
  getThisAdminByid(id:any):Observable<any>{
    return this.http.get<any>(`${this.url}/getuser/${id}`)
  }
  Isloggedin:Boolean=false; 
  SaveToken(token:any){
    let decodeToken=this.helper.decodeToken(token)
    localStorage.setItem('token',token)
    localStorage.setItem('username',decodeToken.nom) 
    localStorage.setItem('role',decodeToken.role)
      this.Isloggedin=true;
  }
  getAdminName(){
    return localStorage.getItem('username')
  }
  Token:any; 
  getAdminid(){
     this.Token = localStorage.getItem('token')
     let decodeToken=this.helper.decodeToken(this.Token)
       return decodeToken.user_id
  }
  LoggedIn(){
    let token :any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)
    if(decodeToken.role!=='admin'){
      return false 
    }
    if(this.helper.isTokenExpired(token)){
      return false 
    }
    return true 
  }
  Logout(){
    //  localStorage.removeItem('token')
    // localStorage.removeItem('nom')
    // localStorage.removeItem('role') 
    localStorage.clear();
  }
 }
