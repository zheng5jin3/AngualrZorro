import { LoginComponent } from './login/login.component';

export const appRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    }, 
    {
        // 以上路由没有匹配到就选择这个
        path: '**', // fallback router must in the last
        component: LoginComponent
    }
];
