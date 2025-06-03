import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './services/guard/auth.guard';
import { NgModule } from '@angular/core';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'activate-account',
        component: ActivateAccountComponent
    },
    // TODO: Crear los componentes de books y activate-account
    // {
    //     path: 'books',
    //     loadChildren: () => import('./modules/book/book.module').then(m => m.BookModule),
    //     canActivate: [authGuard]
    // }
];
