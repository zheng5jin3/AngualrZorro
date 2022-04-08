import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomRouteReuseStrategy } from '../common/RouteReuseStrategy/custom-route-reuse-strategy';
// import { SSL_OP_MSIE_SSLV2_RSA_PADDING } from 'constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isCollapsed = false;
  triggerTemplate = null;
  menus = [];
  showMenus = [];
  tabIndex = -1;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //初始化菜单
    this.menus = [
      {
        id: "1",
        name: "权限管理",
        isOpen: false,
        icon: 'anticon-home',
        children: [
          { name: "组织架构", icon: 'fa-male', isSelected: false, route: 'system/orgMng' },
          { name: "用户管理", icon: 'fa-bug', isSelected: false, route: 'system/userMng' },
          { name: "角色管理", icon: 'fa-bus', isSelected: true, route: 'system/roleMng' },
          { name: "权限管理", icon: 'fa-send', isSelected: false, route: 'system/permission' }
        ]
      },
      {
        id: "2",
        name: "内容管理",
        isOpen: false,
        icon: 'anticon-contacts',
        children: [
          { name: "文章管理", icon: 'fa-mobile', isSelected: false, route: 'post/posttable/page/1' },
          { name: "评论管理", icon: 'fa-minus', isSelected: false, route: 'comment/commenttable/page/1' },
          { name: "我是这里最长的一个子菜单", icon: 'fa-minus', isSelected: false, route: 'comment/commenttable/page/1' }
        ]
      },
      {
        id: "3",
        name: "系统监控",
        isOpen: false,
        icon: 'anticon-eye-o',
        children: [
          { name: "系统状态", icon: 'fa-line-chart', isSelected: false, route: 'sys/sysmonitor' },
          { name: "高德地图", icon: 'fa-map-marker', isSelected: false, route: 'map/map' }
        ]
      },
      {
        id: "4",
        name: "系统监控",
        isOpen: false,
        icon: 'anticon-eye-o',
        children: [
          { name: "系统状态", icon: 'fa-line-chart', isSelected: false, route: 'sys/sysmonitor' },
          { name: "高德地图", icon: 'fa-map-marker', isSelected: false, route: 'map/map' }
        ]
      },
      {
        id: "5",
        name: "系统监控",
        isOpen: false,
        icon: 'anticon-eye-o',
        children: [
          { name: "系统状态", icon: 'fa-line-chart', isSelected: false, route: 'sys/sysmonitor' },
          { name: "高德地图", icon: 'fa-map-marker', isSelected: false, route: 'map/map' }
        ]
      },
      {
        id: "6",
        name: "系统监控",
        isOpen: false,
        icon: 'anticon-eye-o',
        children: [
          { name: "系统状态", icon: 'fa-line-chart', isSelected: false, route: 'sys/sysmonitor' },
          { name: "高德地图", icon: 'fa-map-marker', isSelected: false, route: 'map/map' }
        ]
      },
      {
        id: "7",
        name: "系统监控",
        isOpen: false,
        icon: 'anticon-eye-o',
        children: [
          { name: "系统状态", icon: 'fa-line-chart', isSelected: false, route: 'sys/sysmonitor' },
          { name: "高德地图", icon: 'fa-map-marker', isSelected: false, route: 'map/map' }
        ]
      },
      {
        id: "8",
        name: "系统监控",
        isOpen: false,
        icon: 'anticon-eye-o',
        children: [
          { name: "系统状态", icon: 'fa-line-chart', isSelected: false, route: 'sys/sysmonitor' },
          { name: "高德地图", icon: 'fa-map-marker', isSelected: false, route: 'map/map' }
        ]
      }
    ];

    // 显示首页
    // this.navigateMenu({ name: "首页", route: 'welcome' });
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }


  //只展开当前父级菜单
  openHandler(value: string): void {
    if (!this.isCollapsed) {
      for (let menu of this.menus) {
        if (menu.id !== value) {
          menu.isOpen = false;
        } else {
          menu.isOpen = true;
        }
      }
    }
  }

  /**
   * 显示菜单
   * @param menu 
   */
  navigateMenu(menu) {
    this.router.navigate([menu.route], { relativeTo: this.route });
    let i = this.showMenus.findIndex(x => x.route == menu.route);
    if (i == -1) {
      this.showMenus.push(menu);
      this.tabIndex = this.showMenus.length - 1;
    } else {
      this.tabIndex = i;
    }
  }

  /**
   * 关闭选项卡
   * @param tab 
   * @param index 
   */
  closeTab(index): void {
    /**删除路由复用**/
    CustomRouteReuseStrategy.deleteRouteSnapshot('/home/' + this.showMenus[index].route);
    /* 仿照谷歌浏览器选项卡关闭原理 */
    if (index == this.tabIndex) {
      let menuLength = this.showMenus.length;
      this.showMenus.splice(index, 1);
      if (index == menuLength - 1) {
        this.navigateMenu(this.showMenus[index - 1])
      } else {
        this.navigateMenu(this.showMenus[index])
      }
    } else {
      let menu = this.showMenus[this.tabIndex];
      this.showMenus.splice(index, 1);
      this.tabIndex = this.showMenus.findIndex(x => x.route == menu.route);
    }
  }

  /**
   * 切换选项卡
   * @param index 
   */
  tabChange(index) {
    // this.tabIndex = index;
    this.navigateMenu(this.showMenus[index])
  }





}
