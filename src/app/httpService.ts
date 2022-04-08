import { Injectable } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/Rx";

@Injectable()
export class HttpService {
 
  constructor(private http: Http) { }

  get(url:string):Observable<Response>{
    return this.http.get(url).map(res=>res.json());  //返回数组转Json
  }

  post(url: string,paras :object): Observable<Response> {
    let sheaders= new Headers({'Content-Type':'application/json'});
    return this.http.post(url, JSON.stringify(paras))
               .map(res => res.json());  //返回数组转Json
  }



}
