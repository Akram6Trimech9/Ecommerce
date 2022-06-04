import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './blank-layout/blank-layout.component';
import { RouterModule } from '@angular/router';
import { ClientNavbarComponent } from './user-layout/static-components/client-navbar/client-navbar.component';
import { ClientFooterComponent } from './user-layout/static-components/client-footer/client-footer.component';
import { NavbaradminComponent } from './admin-layout/navbaradmin/navbaradmin.component';
import { FooterAdminComponent } from './admin-layout/footer-admin/footer-admin.component';
@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    ClientFooterComponent,
    ClientNavbarComponent,
    UserLayoutComponent,
    BlankLayoutComponent,
    NavbaradminComponent,
    FooterAdminComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
