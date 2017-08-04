import { FullLayoutComponent } from './layouts/full-layout.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { UsersComponent } from './components/users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';



const APP_ROUTES: Routes = [
    {
        path: 'home', component: FullLayoutComponent,
        children: [
            { path: 'user', component: UsersComponent },
            { path: 'permission', component: PermissionsComponent },
            { path: 'role', component: RolesComponent },
            { path: '**', pathMatch: 'full', redirectTo: 'home' }
            /* { path: '**', pathMatch: 'full', redirectTo: '' }*/
        ],
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'reset/:id', component: PasswordResetComponent },
    { path: 'password-recovery', component: PasswordRecoveryComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


export const routing = RouterModule.forRoot(APP_ROUTES);