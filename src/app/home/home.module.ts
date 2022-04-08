import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';
import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';

import { AccountBookFill, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
const icons: IconDefinition[] = [AccountBookFill, AlertOutline, AlertFill];

@NgModule({
  imports: [
    CommonModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    RouterModule.forChild(homeRoutes),
  ],
  // 存放组件、指令、服务
  declarations: [HomeComponent],
  // 存放服务，用来用来注入
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class HomeModule { }
