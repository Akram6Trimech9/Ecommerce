import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpecialComponent } from './special.component';

const routes: Routes = [{path:'',component:SpecialComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialRoutingModule { }
