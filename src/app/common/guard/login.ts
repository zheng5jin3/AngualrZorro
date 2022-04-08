import { CanActivate } from "@angular/router";

//路由守卫 - 进入路由
export class LoginGuard implements CanActivate {

    canActivate() {
        console.log('此处进入该路由');
        return window.confirm("确定进入该路由吗？");
    }




}

