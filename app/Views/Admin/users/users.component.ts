import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from 'src/app/Services/client-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:ClientServiceService) { }
  usertable:any[]=[]
  ngOnInit(): void {
   this.userService.getuser().subscribe(res=>{
     this.usertable=res

   })
   console.log(this.usertable)
  }
  deletethis(obj:any){
  // this.userService.de
  }
  savethis(obj:any){

  }

}
