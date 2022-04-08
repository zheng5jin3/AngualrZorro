import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomRouteReuseStrategy } from './common/RouteReuseStrategy/custom-route-reuse-strategy';

// 请求数据
import { HttpModule } from '@angular/http';

// 富文本编辑器
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    QuillModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule,
    RouterModule.forRoot(appRoutes) /* 当前项目依赖的模块*/
  ],
  bootstrap: [AppComponent],
  /** 配置 ng-zorro-antd 国际化 **/
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy } // (token,实例化对象名)路由复用
  ]
})
export class AppModule { }
