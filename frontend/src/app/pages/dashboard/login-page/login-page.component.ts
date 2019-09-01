import {Component, OnDestroy, Input, EventEmitter, Output} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators/takeWhile' ;
import { HttpService } from '../../../services/http/http.service';

interface CardSettings {
  title: string;
  iconClass: string;
  type: string;
}

@Component({
  selector: 'login-page',
  styleUrls: ['./login-page.component.scss'],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent implements OnDestroy {

  show = false;
  username;
  password;
  @Output() voted = new EventEmitter<boolean>();

  constructor(private themeService: NbThemeService,private http: HttpService) {
    // this.themeService.getJsTheme()
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(theme => {
    //     this.statusCards = this.statusCardsByThemes[theme.name];
    // });
  }

  ngOnDestroy() {
    // this.alive = false;
  }
  goto(){
    this.show =true;
    console.log('here')
  }
  login(){
    var user = {username:this.username,password:this.password}
    this.http.Login(user).subscribe(res=>{
      if(res == 'No such user exists' || res == 'Incorrect password'){
        console.log(res)
      }
      else if(res.username && res.username == user.username){
        localStorage.setItem('user',res.username)
        this.voted.emit(this.username);
      }
    },err=>{
      console.log(err)
    })
    
  }

  register(){
    var user = {username:this.username,password:this.password}
    this.http.Signup(user).subscribe(res=>{
      console.log(res)
    })
  }

}
