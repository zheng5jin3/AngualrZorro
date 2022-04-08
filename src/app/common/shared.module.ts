import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBusService } from './services/event-bus.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HighlightDirective } from './directive/highlight.directive';
import { DateFormatPipe } from './pipe/date-format.pipe';

/** 打印  **/
import { EssenceNg2PrintModule } from 'essence-ng2-print';
/** 富文本编辑器 **/
import { QuillModule } from 'ngx-quill';
/** 二维码  **/
import { QRCodeModule } from 'angular2-qrcode';//不支持中文

@NgModule({
  declarations: [HighlightDirective, DateFormatPipe],
  imports: [
    QuillModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    EssenceNg2PrintModule,
    QRCodeModule,
  ],
  exports: [
    QuillModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    EssenceNg2PrintModule,
    HighlightDirective,
    DateFormatPipe,
    QRCodeModule
  ],

})
export class SharedModule { }
