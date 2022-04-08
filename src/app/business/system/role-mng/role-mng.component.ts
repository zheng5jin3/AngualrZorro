import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CustomRouteReuseStrategy } from 'src/app/common/RouteReuseStrategy/custom-route-reuse-strategy';

@Component({
  selector: 'app-role-mng',
  templateUrl: './role-mng.component.html',
  styleUrls: ['./role-mng.component.css']
})
export class RoleMngComponent implements OnInit {

  formModel: FormGroup;
  formModel2: FormGroup;

  printCSS: string[];
  printStyle: string;
  printBtnBoolean = true;

  personInfo: any;
  editorContent: string = "";
  constructor(private fb: FormBuilder) {

    this.formModel = fb.group({
      username: ['zj', [Validators.required, Validators.minLength(6)]],     //第一个参数是默认值，第二参数是校验方法，第三参数是异步校验方法，
      mobile: [null, this.mobileValid],
      passwordsGroup: fb.group({
        password: ['117841', [Validators.minLength(6)]],
        pconfirm: ['117841']
      }, { validator: this.equalValid })
    });



    //法一
    this.formModel2 = fb.group({
      username: ['zj'],     //第一个参数是默认值，第二参数是校验方法，第三参数是异步校验方法，
      dateRange: fb.group({
        from: [''],
        to: ['']
      }),
      emails: fb.array([
        ['1178410365@qq.com'],   //formArray是数组，formGroup是键值对
        ['1144444381@163.com']
      ])
    });

    /*  法二
        this.formModel2 = new FormGroup({
          username: new FormControl('zj'),
          dateRange: new FormGroup({
            from: new FormControl(''),
            to: new FormControl('')
          }),
          emails: fb.array([
            new FormControl('1178410365@qq.com'),   //formArray是数组，formgroup是键值对
            new FormControl('1144444381@163.com')
          ])
        });
    */


    this.personInfo = {
      username: '张三',
      sex: '1',
      cityList: ['北京', '上海', '广州'],
      city: '上海',
      hobby: [
        { title: '吃饭', checked: false },
        { title: '睡觉', checked: false },
        { title: '赚钱', checked: true }],
    };
  }

  ngOnInit() {

    // this.printCSS = ['/node_modules/ng-zorro-antd/src/ng-zorro-antd.min.css'];
    this.printCSS = ['http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'];
    this.printStyle = '';

  }

  onSubmit() {
    let isVaild: boolean = this.formModel.get('username').valid;  //表单校验
    let errors: any = this.formModel.get('username').errors;  //表单校验
    console.log('username的校验结果是：' + isVaild);
    console.log('username的错误信息是：' + JSON.stringify(errors));

    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }

    if (this.formModel2.valid) {
      console.log(this.formModel2.value);
    }
  }

  addEmail() {
    let emails = this.formModel2.get('emails') as FormArray;
    emails.push(new FormControl(''));
  }


  mobileValid(control: FormControl) {
    let len = control.value || '';
    let isVaild: boolean = (len.length == 11)  //表`单校验
    return isVaild ? null : { mobile: true };
  }

  equalValid(group: FormGroup) {
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pconfirm') as FormControl;
    let isVaild = (password.value === pconfirm.value);
    // return isVaild ? null : { equal: true };
    return isVaild ? null : { equal: { describe: '密码不一致' } };
  }

  enterEvent() {
    alert(this.editorContent);
  }


  printComplete() {
    this.printBtnBoolean = true;
  }
  beforePrint() {
    this.printBtnBoolean = true;//false;
  }

  /**删除路由复用**/
  delete() {
    debugger;
    CustomRouteReuseStrategy.deleteRouteSnapshot('/home/system/permission');
  }
}
