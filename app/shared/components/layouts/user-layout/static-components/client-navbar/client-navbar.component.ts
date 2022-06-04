import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientServiceService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-client-navbar',
  templateUrl: './client-navbar.component.html',
  styleUrls: ['./client-navbar.component.css']
})
export class ClientNavbarComponent implements OnInit {
login:boolean=true
logot:boolean=true
  constructor(private clientService:ClientServiceService,private router:Router) { }
 clientname:any ;
  ngOnInit(): void {
    this.clientname=this.clientService.getuserName()
    this.clientService.LoggedIn().subscribe(res=>{
     if(res==true){
      this.login=false
     }else{
       this.login=true
     }
     console.log(this.login)
    } )
  }
  logout(){
   this.clientService.Logout()
   this.login=false
    this.router.navigateByUrl('')    
   }

}
