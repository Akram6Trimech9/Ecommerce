import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private adminService:AdminServiceService,private router:Router) { }
 
  ngOnInit(): void {
   
  }
  fileselected:any
  onFileSelected(event:any) {
    const file:File = event.target.files[0];
    this.fileselected=file
  }
  ErrorMessage:any ;
  role='admin'
  genre:string[]=['male,female']
  add(f:NgForm){ 
    console.log(f.value)
   var formdata:any=new FormData();
  formdata.append("nom",f.value.nom)
  formdata.append("prenom",f.value.prenom)
  formdata.append("mdp",f.value.mdp)
  formdata.append("genre",f.value.gendre)
  formdata.append("numtel",f.value.numtel)
  formdata.append("cin",f.value.cin)
  formdata.append("email",f.value.email)
  formdata.append("role",this.role)
  formdata.append("image",this.fileselected)

  this.adminService.Signup(formdata).subscribe((res)  => {
    this.router.navigate(['authadmin'])

   },(err:HttpErrorResponse)=>{
   this.ErrorMessage=err.error
   console.log(this.ErrorMessage)
  })
 }

}