import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientServiceService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-clientsignup',
  templateUrl: './clientsignup.component.html',
  styleUrls: ['./clientsignup.component.css']
})
export class ClientsignupComponent implements OnInit {
  fileselected:any
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    this.fileselected=file
  }
  constructor(private ClientService:ClientServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  ErrorMessage:any ;

  role='client'
  // genre:string[]=['male,female']
  add(f:NgForm){ 
  
   var formdata:any=new FormData();
  formdata.append("nom",f.value.nom)
  formdata.append("prenom",f.value.prenom)
  formdata.append("mdp",f.value.mdp)
  // formdata.append("genre",f.value.gendre)
  formdata.append("numtel",f.value.numtel)
  formdata.append("cin",f.value.cin)
  formdata.append("email",f.value.email)
  formdata.append("role",this.role)
  formdata.append("image",this.fileselected)

  this.ClientService.Signup(formdata).subscribe((res)  => {
    console.log(res)
      const usercord:any={
          email:f.value.email,
          mdp:f.value.mdp
      }
    this.ClientService.login(usercord).subscribe(log=>{
       this.ClientService.SaveToken(log.token)
       console.log(log)
       setTimeout(() => {
        let currentUrl = this.router.url;
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate([currentUrl]);
        });       }, 5000);
    })
   },(err:HttpErrorResponse)=>{
   this.ErrorMessage=err.error
   console.log(this.ErrorMessage)
  })
 }

}
