import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './components/layouts/layouts.module';
import { RouterModule } from '@angular/router';
 


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsModule
  ]
})
export class SharedModule{ }
