import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLoginRoutingModule } from './client-login-routing.module';
import { FormsModule } from '@angular/forms';
import { ClientLoginComponent } from './client-login.component';


@NgModule({
  declarations: [
    ClientLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientLoginRoutingModule
  ]
})
export class ClientLoginModule { }
