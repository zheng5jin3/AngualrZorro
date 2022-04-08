import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {

    //法一
    //this.userId = this.routeInfo.snapshot.params["id"];

    //法二：可以解决路由自己跳转到自己上的Bug。动态路由传值
    this.routeInfo.params.subscribe(params => this.userId = params["id"]);

  }

}
