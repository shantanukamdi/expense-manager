import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

//Router Configuration
export const routes: Routes = [
    { path: '',component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);