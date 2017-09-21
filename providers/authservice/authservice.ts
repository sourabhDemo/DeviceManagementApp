import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    
  }

  apiUrl: string = "http://localhost:1337/api/login";
  data: any[];

  login(credentials) {
    
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin' , '*');

      this.http.post(this.apiUrl , JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    }); 

  };

}
