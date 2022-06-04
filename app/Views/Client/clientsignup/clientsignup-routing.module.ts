import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../../Admin/auth/signup/signup.component';
import { ClientsignupComponent } from './clientsignup.component';

const routes: Routes = [{
  path:'',component:ClientsignupComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsignupRoutingModule { }
