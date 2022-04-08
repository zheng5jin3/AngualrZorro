import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
    public static handlers: { [key: string]: DetachedRouteHandle } = {};
    private static waitDelete: string;

    /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return true;
    }

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        if (CustomRouteReuseStrategy.waitDelete && CustomRouteReuseStrategy.waitDelete === this.getRouteUrl(route)) {
            // 如果待删除是当前路由则不存储快照
            CustomRouteReuseStrategy.waitDelete = null;
            return;
        }
        debugger;
        CustomRouteReuseStrategy.handlers[this.getRouteUrl(route)] = handle;
    }

    /** 若 path 在缓存中有的都认为允许还原路由 */
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!CustomRouteReuseStrategy.handlers[this.getRouteUrl(route)];
    }

    /** 从缓存中获取快照，若无则返回nul */
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig) {
            return null;
        }

        return CustomRouteReuseStrategy.handlers[this.getRouteUrl(route)];
    }

    /** 进入路由触发，判断是否同一路由 */
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig &&
            JSON.stringify(future.params) === JSON.stringify(curr.params);
    }

    private getRouteUrl(route: ActivatedRouteSnapshot) {
        return route['_routerState'].url.replace(/\//g, '_');
    }

    public static deleteRouteSnapshot(url: string): void {
        const key = url.replace(/\//g, '_');
        if (CustomRouteReuseStrategy.handlers[key]) {
            delete CustomRouteReuseStrategy.handlers[key];
        } else {
            CustomRouteReuseStrategy.waitDelete = key;
        }
    }

    /*
    private handlers: { [key: string]: any } = {};

    //是否允许复用路由
    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // debugger;
        // return route.data.reload === false;
        return true;
    }

    //当路由离开时会触发，存储路由
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.handlers[route.routeConfig.path] = {
            snapshot: route,
            handle: handle
        };
    }

    //是否允许还原路由
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    }

    //获取存储路由
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        if (!route.routeConfig || route.routeConfig.loadChildren || !this.handlers[route.routeConfig.path]) return null;
        return this.handlers[route.routeConfig.path].handle;
    }

    // 进入路由触发，是否同一路由时复用路由
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }*/
}
