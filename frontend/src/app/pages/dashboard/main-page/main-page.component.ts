import {Component, OnDestroy, Input, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import { WebSocketService } from '../../../services/websocket.service';
import { HttpService } from '../../../services/http/http.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'main-page',
  styleUrls: ['./main-page.component.scss'],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnDestroy,OnInit {

  show = false;
  text
  chat = [];
  constructor(private themeService: NbThemeService, private wSService: WebSocketService,  private http: HttpService) {
    // this.themeService.getJsTheme()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(theme => {
    //     this.statusCards = this.statusCardsByThemes[theme.name];
    // });
  }

  ngOnInit(){
    this.wSService.litsen('chat message').subscribe((data)=>{
      console.log(data)
      this.chat.push(data);
    })
  }

  ngOnDestroy() {
    // this.alive = false;
  }
  goto(){
    this.show =true;
    console.log('here')
  }
  emitt(){
    // this.http.send().subscribe(res=>{
    //   console.log(res)
    // })
    var msg = {user:localStorage.getItem('user'), message:this.text}
    this.wSService.emit('chat message',msg)
  }
}
