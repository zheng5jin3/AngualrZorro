import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  randomUserUrl = 'https://api.randomuser.me/';
  constructor(private http: HttpClient, private htp: Http) { }

  getUsers(pageIndex: number = 1, pageSize: number = 10, sortField: string, sortOrder: string, genders: string[]): Observable<{}> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('sortField', sortField)
      .append('sortOrder', sortOrder);
    genders.forEach(gender => {
      params = params.append('gender', gender);
    });
    return this.http.get(`${this.randomUserUrl}`, {
      params
    });
  }

  fetData() {
    return this.htp.get("https://jsonplaceholder.typicode.com/users").map(res => res.json());
  }


}
