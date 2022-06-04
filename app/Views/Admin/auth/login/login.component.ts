import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!:FormGroup
  constructor(private AdminService:AdminServiceService,private Router:Router,private formBuilder: FormBuilder) {
   }
   submitted = false;

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
 
  } 
  get f() { return this.LoginForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
   
          const   usercord:any={
          email:this.LoginForm.value.email,
          mdp:this.LoginForm.value.password
            }
    // display form values on success
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.LoginForm.value, null, 4));
    this.AdminService.login(usercord).subscribe(res=>{
      console.log(res)
            this.AdminService.SaveToken(res.token)  
             this.Router.navigateByUrl('admin')

    },err=>{

      console.log(err)
    
    })
    //console.log(this.LoginForm.value)
}

onReset() {
    this.submitted = false;
    this.LoginForm.reset();
}
     
}
