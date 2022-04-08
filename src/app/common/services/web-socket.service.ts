import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  ws: WebSocket;
  constructor() { }

  createObservableSocket(url: string): Observable<any> {

    this.ws = new WebSocket(url);
    return new Observable<any>(
      observer => {
        this.ws.onmessage = event => observer.next(event.data);
        this.ws.onerror = event => observer.error(event);
        this.ws.onclose = event => observer.complete();
      }
    );
  }


  sendMesage(message: string) {
    this.ws.send(message);
  }

}
