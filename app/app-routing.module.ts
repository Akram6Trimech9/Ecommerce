import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';

const routes: Routes = [
  //{ path: '**', component: PageNotFoundComponent }
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      {path:'users', loadChildren:()=>import('./Views/Admin/users/users.module').then(m=>m.UsersModule)},
      {path:'categories',loadChildren:()=>import('./Views/Admin/categories/categories.module').then(m=>m.CategoriesModule)},
      {path:'products',loadChildren:()=>import('./Views/Admin/product/product.module').then(m=>m.ProductModule)},
      {path:'subcategories',loadChildren:()=>import('./Views/Admin/sub-categ/sub-categ.module').then(m=>m.SubCategModule)},


    ]
  },
  {
    path:'',redirectTo:'/client', pathMatch: 'full'
  },
  {
    path:'client',
    component:UserLayoutComponent,
    children:[
      {path:'',loadChildren:()=>import('./Views/Client/homepage/homepage.module').then(m=>m.HomepageModule)},
      {path:'products',loadChildren:()=>import('./Views/Client/products-page/products-page.module').then(m=>m.ProductsPageModule)},
      {path:'product/:id',loadChildren:()=>import('./Views/Client/single-product/single-product.module').then(m=>m.SingleProductModule)},
      {path:'aboutus',loadChildren:()=>import('./Views/Client/aboutus/aboutus.module').then(m=>m.AboutusModule)},
      {path:'contact',loadChildren:()=>import('./Views/Client/contact/contact.module').then(m=>m.ContactModule)},
      {path:'login',loadChildren:()=>import('./Views/Client/client-login/client-login.module').then(m=>m.ClientLoginModule)},
      {path:'registre',loadChildren:()=>import('./Views/Client/clientsignup/clientsignup.module').then(m=>m.ClientsignupModule)},
     {path:'special',loadChildren:()=>import('./Views/Client/special/special.module').then(m=>m.SpecialModule)}
    ]
  },
  {
    path:'authadmin',
    component:AuthLayoutComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('./Views/Admin/auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
