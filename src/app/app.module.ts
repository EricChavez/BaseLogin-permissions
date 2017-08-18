

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormGroup, FormControl, Validators, FormArray, ReactiveFormsModule  } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';


// services
import { UserService } from './service/user.service';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { AlertService } from './service/alert.service';
import { RoleService } from './service/role.service';
import { NotificationService } from './service/notification.service';

// components
import { LoginComponent } from './components/login/login.component';
import { AlertComponent } from './components/alert/alert.component';

import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { RolesComponent } from './components/roles/roles.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';


// template components
import { NAV_DROPDOWN_DIRECTIVES } from './shared/nav-dropdown.directive';
import { SIDEBAR_TOGGLE_DIRECTIVES } from './shared/sidebar.directive';
import { AsideToggleDirective } from './shared/aside.directive';
import { BreadcrumbsComponent } from './shared/breadcrumb.component';


// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
   
    RegisterComponent,
    UsersComponent,
    PermissionsComponent,
    RolesComponent,
    PasswordRecoveryComponent,
    PasswordResetComponent,
    SIDEBAR_TOGGLE_DIRECTIVES,
    AsideToggleDirective,
    BreadcrumbsComponent,
    FullLayoutComponent,
    NAV_DROPDOWN_DIRECTIVES,
    HeaderComponent,
    MenuComponent,
    BreadcrumbComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [
    AuthenticationService,
    UserService,
    AlertService,
    AuthGuard,
    RoleService,
    NotificationService,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
