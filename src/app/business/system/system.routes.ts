import { SystemComponent } from './system.component';
import { UserMngComponent } from './user-mng/user-mng.component';
import { OrgMngComponent } from './org-mng/org-mng.component';
import { RoleMngComponent } from './role-mng/role-mng.component';
import { LoginGuard } from '../../common/guard/login';
import { UnsaveGuard } from '../../common/guard/unsave';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PermissionComponent } from './permission/permission.component';
import { UserDetlComponent } from './user-detl/user-detl.component';
import { UserDetalComponent } from './user-detal/user-detal.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const systemRoutes = [
    {
        path: '',
        component: SystemComponent,
        children: [
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            {
                path: 'userMng', component: UserMngComponent, children: [
                    { path: 'userDetail/:id', component: UserDetailComponent },
                    { path: 'userDetl', component: UserDetlComponent },
                ]
            },
            {
                path: 'orgMng',
                component: OrgMngComponent,
                data: { reload: false }, //路由复用
                canActivate: [LoginGuard],
                canDeactivate: [UnsaveGuard]
            },
            { path: 'userDetal/:id', component: UserDetalComponent },
            { path: 'roleMng', component: RoleMngComponent, data: { reload: false } },
            { path: 'permission', component: PermissionComponent },
            { path: 'welcome', component: WelcomeComponent },
            { path: '**', redirectTo: 'welcome' }//匹配不到路由的时候加载的组件
        ]
    }
]
