import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EventBusService } from '../../../common/services/event-bus.service';
import { createWiresService } from 'selenium-webdriver/firefox';
import { HttpService } from '../../../httpService';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { RandomUserService } from '../../../common/services/random-user.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  //自动完成
  options = [];

  // 表单
  validateForm: FormGroup;
  isCollapse = true;

  constructor(private fb: FormBuilder, private randomUserService: RandomUserService) {
    /*
        this.validateForm = fb.group({
          field0: ['zj'],     //第一个参数是默认值，第二参数是校验方法，第三参数是异步校验方法，
          field1: ['zj'],
          field2: ['zj'],
          field3: ['zj'],
          field4: ['zj'],
          field5: ['zj'],
          field6: ['zj'],
          field7: ['zj'],
          field8: ['zj'],
          field9: ['zj']
        });
        console.log(this.validateForm);
      **/
  }

  // 错误信息
  codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };

  ngOnInit() {

    /*
     this.httpService.post('', null).subscribe(
       val => console.log(val),
       err => console.log(err),
       () => console.log('I am complete'),
     );
     **/

    // 加载表格数据
    this.searchData();

    // 响应式表单加载
    this.validateForm = this.fb.group({});
    for (let i = 0; i < 20; i++) {
      this.validateForm.addControl(`field${i}`, new FormControl());
    }

    //Http
    this.randomUserService.fetData().subscribe(data => {
      console.log(data);
    });

  }

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  // 自动完成输入事件
  onInput(value: string): void {
    this.options = value ? [
      value,
      value + value,
      value + value + value
    ] : [];
  }






  // 表格
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  dataSet = [];
  loading = true;
  sortValue = null;
  sortKey = null;
  filterGender = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' }
  ];
  searchGenderList: string[] = [];

  sort(sort: { key: string, value: string }): void {
    this.sortKey = sort.key;
    this.sortValue = sort.value;
    this.searchData();
  }

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.randomUserService.getUsers(this.pageIndex, this.pageSize, this.sortKey, this.sortValue, this.searchGenderList).subscribe((data: any) => {
      this.loading = false;
      this.total = 200;
      this.dataSet = data.results;
    });
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.searchData(true);
  }

}
