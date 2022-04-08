import { CanDeactivate } from "@angular/router";
import { UserMngComponent } from "../../business/system/user-mng/user-mng.component";

//路由守卫- 离开路由
export class UnsaveGuard implements CanDeactivate<UserMngComponent> {
    canDeactivate(component: UserMngComponent) {
        console.log('此处离开该路由');
        return window.confirm("确定离开该路由吗？");
    }
}
