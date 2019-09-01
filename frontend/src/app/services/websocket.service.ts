import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable()
export class WebSocketService {
  
    socket:any
    readonly uri : string = 'ws://localhost:3000'
    constructor() {
        this.socket = io(this.uri)
   }


  litsen(eventName: string){
      return new Observable((subscriber)=>{
          this.socket.on(eventName,(data)=>{
              subscriber.next(data)
          })
      })
  }

  emit(eventName:string,data:any){
      this.socket.emit(eventName,data)
  }
}
