import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import { systemRoutes } from './system.routes';
import { OrgMngComponent } from './org-mng/org-mng.component';
import { UserMngComponent } from './user-mng/user-mng.component';
import { RoleMngComponent } from './role-mng/role-mng.component';
import { LoginGuard } from '../../common/guard/login';
import { UnsaveGuard } from '../../common/guard/unsave';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PermissionComponent } from './permission/permission.component';
import { EventBusService } from '../../common/services/event-bus.service';
import { WebSocketService } from '../../common/services/web-socket.service';
import { OrgMngSubComponent } from './org-mng-sub/org-mng-sub.component';
import { SharedModule } from '../../common/shared.module';
import { UserDetlComponent } from './user-detl/user-detl.component';
import { UserDetalComponent } from './user-detal/user-detal.component';
import { RandomUserService } from '../../common/services/random-user.service';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(systemRoutes)
  ],
  declarations: [
    SystemComponent,
    OrgMngComponent,
    UserMngComponent,
    RoleMngComponent,
    UserDetailComponent,
    PermissionComponent,
    OrgMngSubComponent,
    UserDetlComponent,
    UserDetalComponent,
    WelcomeComponent,
  ],
  providers: [
    { provide: EventBusService, useClass: EventBusService }, //可以省略写成EventBusService
    {
      provide: EventBusService, useFactory: (logger: LoginGuard, appConfig) => {
        return new EventBusService();
      }, deps: [LoginGuard, "AppConfig"]
    },
    { provide: "AppConfig", useValue: true },//依赖注入
    LoginGuard,
    UnsaveGuard,
    WebSocketService,
    RandomUserService
  ]
})
export class SystemModule { }
