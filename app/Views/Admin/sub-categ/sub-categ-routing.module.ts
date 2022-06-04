import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCategComponent } from './sub-categ.component';

const routes: Routes = [ {
  path:'',component:SubCategComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategRoutingModule { }
