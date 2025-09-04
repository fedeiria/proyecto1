import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'login',
        loadComponent: () => 
            import('./components/login/login').then(c => c.Login)
    },
    {
        path: 'welcome',
        loadComponent: () => 
            import('./components/bienvenido/bienvenido').then(c => c.Bienvenido)
    },
    {
        path: '**',
        loadComponent: () => 
            import('./components/error/error').then(c => c.Error)
    }
];