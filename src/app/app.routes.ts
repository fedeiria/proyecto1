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
        path: 'registro',
        loadComponent: () =>
            import('./components/registro/registro').then(c => c.Registro)
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