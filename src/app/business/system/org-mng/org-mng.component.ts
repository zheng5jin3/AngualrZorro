import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PermissionComponent } from '../permission/permission.component';
import { EventBusService } from '../../../common/services/event-bus.service';
import { OrgMngSubComponent } from '../org-mng-sub/org-mng-sub.component';

@Component({
  selector: 'app-org-mng',
  templateUrl: './org-mng.component.html',
  styleUrls: ['./org-mng.component.css']
})
export class OrgMngComponent implements OnInit {

  person: any = {
    name: '',
    active: false
  };


  @ViewChild('dia') dia: ElementRef; //定义子试图
  constructor(public eventService: EventBusService) { }

  ngOnInit() {
    //多环境判断（environment.production会根据是测试环境或者正式环境改变）
    if (!environment.production) {
      setTimeout(() => {
        this.person.name = "☺";
        this.person.active = true;
      }, 5000);
    }

    //元素选择器
    this.dia.nativeElement.style.color = 'red';

    //遍历数组获取下标和值
    let arr: any[] = [
      { name: 'zj', age: 23 },
      { name: 'qe', age: 25 },
      { name: 'fg', age: 27 },
    ];
    for (const key in arr) {
      arr[key].index = parseInt(key) + 1;
    }
    console.log(arr);
  }



  @ViewChild('permission') permission: OrgMngSubComponent;
  getChildData() {
    //主组件调用子组件的方法
    this.permission.run();

    //主组件调用子组件的属性
    this.person.name = this.permission.name;
  }


  yell(msg) {
    alert(msg);
  }

  send() {
    this.eventService.topToggleBtn.next('消息订阅和发布一');
    this.eventService.eventEmit.emit("消息订阅和发布二");
  }

  /*
   *获取DOM元素
  */
  getDom(e) {
    console.log(e);
    e.target.style.fontSize = "xx-large";
  }
}
