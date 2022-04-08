import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventBusService } from '../../../common/services/event-bus.service';

@Component({
  selector: 'app-org-mng-sub',
  templateUrl: './org-mng-sub.component.html',
  styleUrls: ['./org-mng-sub.component.css']
})
export class OrgMngSubComponent implements OnInit {

  //自定义属性
  @Input() person;
  @Input() onYell;

  //自定义事件
  @Output() onYell2 = new EventEmitter();

  name: string = '我是子组件的属性';

  constructor(public eventService: EventBusService) {
  }

  ngOnInit() {
    this.eventService.topToggleBtn.subscribe(params => {
      alert(params);
    });

    this.eventService.eventEmit.subscribe((params: any) => {
      alert(params);
    });
  }


  clickMe() {
    //触发主组件事件
    this.onYell2.emit('我是主组件的方法');
  }

  run() {
    alert('我是子组件的方法！');
  }
}
