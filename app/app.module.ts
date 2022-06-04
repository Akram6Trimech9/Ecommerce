import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { ClientLoginComponent } from './Views/Client/client-login/client-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './Materiel/MaterialModule';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    NgbModule,
        BrowserAnimationsModule, // required animations module
     ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    MaterialModule,
    FormsModule,
     ReactiveFormsModule,
    SharedModule,
     AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
