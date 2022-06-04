import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategRoutingModule } from './sub-categ-routing.module';
import { FormsModule } from '@angular/forms';
import { SubCategComponent } from './sub-categ.component';
@NgModule({
  declarations: [
    SubCategComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubCategRoutingModule
  ]
})
export class SubCategModule { }
