import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsignupRoutingModule } from './clientsignup-routing.module';
import { ClientsignupComponent } from './clientsignup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientsignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClientsignupRoutingModule
  ]
})
export class ClientsignupModule { }
