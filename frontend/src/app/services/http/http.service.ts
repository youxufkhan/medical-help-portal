import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment'

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  Login(user){
    return <any>this.http.post('http://localhost:3000/login',user)
  }

  Signup(user){
    return <any>this.http.post('http://localhost:3000/signup',user,)
  }
  // getChartData(filter: DashboardFilter) {
  //   // console.log('in http : ', filter)
  //   var query = '';
  //       if (filter != null){
  //         Object.keys(filter).forEach(key => {
  //           if(filter[key]){
  //             query += (query?'&':'')+`${key}=${ encodeURIComponent(filter[key])}`
  //         }
  //         });

  //       }
  //   return this.http.get(`${environment.baseUrl}/getChartData?${query}`);
  // }

  // fetchGoogleTrends(keywor) {
  //   return this.http.get(`${environment.baseUrl}/getGoogleTrends`, {
  //     params: {
  //       keyword: keywor
  //     }
  //   })
  // }

  // fetchHistorcalLicenses() {
  //   return this.http.get(`${environment.baseUrl}/search?size=3`)
  // }

  // fetchSearhedTweets(keywor) {
  //   return this.http.get(`${environment.baseUrl}/getSearchedTweets`, {
  //     params: {
  //       keyword: keywor
  //     }
  //   })
  // }

  // fetchTagCloud() {
  //   return this.http.get(`${environment.baseUrl}/getTagCloud`);
  // }
}
