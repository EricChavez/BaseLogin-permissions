import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormGroup, FormControl, Validators, FormArray,ReactiveFormsModule } from '@angular/forms';

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
 
import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

//services
import { UserService } from './service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import {AlertService } from './service/alert.service'


//components
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { RolesComponent } from './components/roles/roles.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    UsersComponent,
    PermissionsComponent,
    RolesComponent
    
    
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
    
  ],
  providers: [
    AuthenticationService,
    UserService,
    AlertService,
    AuthGuard,
   // fakeBackendProvider,
       // MockBackend,
        BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
