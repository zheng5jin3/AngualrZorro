import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class EventBusService {
  public topToggleBtn: Subject<any> = new Subject<any>();
  public eventEmit: EventEmitter<any> = new EventEmitter();

  constructor() { }

}
