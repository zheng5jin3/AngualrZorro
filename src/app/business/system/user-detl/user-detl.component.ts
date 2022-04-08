import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detl',
  templateUrl: './user-detl.component.html',
  styleUrls: ['./user-detl.component.css']
})
export class UserDetlComponent implements OnInit {

  userId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  //与[在查询参数中传递数据]配套使用
  ngOnInit() {
    
    //法一
    //this.userId = this.routeInfo.snapshot.queryParams["id"];

    //法三:可以解决路由自己跳转到自己上的Bug 。Get传值
    this.routeInfo.queryParams.subscribe(params => { this.userId = params["id"] });
  }

}
