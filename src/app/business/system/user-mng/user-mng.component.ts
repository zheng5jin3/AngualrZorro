import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-mng',
  templateUrl: './user-mng.component.html',
  styleUrls: ['./user-mng.component.css']
})
export class UserMngComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  
  //在路由路径中传递单个参数
  go() {
    this.router.navigate(["userDetail", 2], { relativeTo: this.route });
    // this.router.navigate(["../userDetail", 2], { relativeTo: this.route });
    //../ ./ 主要取决于路由从属级别，
  }



  //在查询参数中传递多个参数
  go2() {
    let navigationExtrans = {
      queryParams: { 'id': 4 },
      relativeTo: this.route
    };
    this.router.navigate(['userDetl'], navigationExtrans);
    // this.router.navigate(['../userDetl'], navigationExtrans);
  }



  //在路由路径中传递单个参数
  go3() {
    //同级别的路由，不是子路由
    this.router.navigate(["../userDetal", 6], { relativeTo: this.route });
  }
}
