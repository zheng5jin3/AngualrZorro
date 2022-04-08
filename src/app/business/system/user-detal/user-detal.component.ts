import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detal',
  templateUrl: './user-detal.component.html',
  styleUrls: ['./user-detal.component.css']
})
export class UserDetalComponent implements OnInit {

  userId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    //法一
    //this.userId = this.routeInfo.snapshot.params["id"];

    //法二：可以解决路由自己跳转到自己上的Bug
    this.routeInfo.params.subscribe(params => this.userId = params["id"]);

  }

}
