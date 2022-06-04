import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  constructor(private clientService:ClientServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  add(f:NgForm){
    const usercord:any={
      email:f.value.email , 
      mdp:f.value.mdp
    }
    this.clientService.login(usercord).subscribe(res=>{
       this.clientService.SaveToken(res.token)
       this.router.navigateByUrl('')
    })
  }

}
