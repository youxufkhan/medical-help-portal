import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const AuthRoutes: Routes = [
    {
        path: '',
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login',
                    urls: [{title: 'login', url: '/login'},{title: 'Login'}]
                }
            },
        ]
    }
];