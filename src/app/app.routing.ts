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
        path: '', component: HomeComponent,
        children: [
            { path: 'user', component: UsersComponent },
            { path: 'permission', component: PermissionsComponent },
            { path: 'role', component: RolesComponent },
            /* { path: '**', pathMatch: 'full', redirectTo: '' }*/
        ],
        canActivate: [AuthGuard]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];


export const routing = RouterModule.forRoot(APP_ROUTES);