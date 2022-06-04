import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-navbaradmin',
  templateUrl: './navbaradmin.component.html',
  styleUrls: ['./navbaradmin.component.css']
})
export class NavbaradminComponent implements OnInit {

  constructor(private Adminservice:AdminServiceService,private Router:Router) { }
   Adminname:any ; 
   adminpicture:any; 
  ngOnInit(): void {
    this.Adminname=this.Adminservice.getAdminName()
    this.Adminservice.getThisAdminByid(this.Adminservice.getAdminid()).subscribe(res=>{
      this.adminpicture=res.image
      console.log(this.adminpicture)
    })
  }
  Logout(){
    this.Adminservice.Logout()
     this.Router.navigateByUrl('authadmin')
  }
  

}
