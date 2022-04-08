import { HomeComponent } from './home.component';

export const homeRoutes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', redirectTo: 'system', pathMatch: 'full' },
            { path: 'system', loadChildren: '../business/system/system.module#SystemModule' },
        ]
    }
]
