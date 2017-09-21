import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApprovalserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ApprovalserviceProvider {

  constructor(public http: Http) {

  }

  apiUrl: string = "http://localhost:1337/api/pendingacceptance";
  data: any[];

  getPendingAcceptance(myid: string) {

    return new Promise<any[]>((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');

      this.http.get(this.apiUrl + '/' + myid, { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  };


  acceptRequest(request: any) {

    return new Promise<any>((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');

      this.http.post(this.apiUrl + '/accept', JSON.stringify(request), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  };


  rejectRequest(request: any) {

    return new Promise<any>((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Access-Control-Allow-Origin', '*');

      this.http.post(this.apiUrl + '/reject', JSON.stringify(request), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  };


  assignDeviceRequest(request: any) {
    
        return new Promise<any>((resolve, reject) => {
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Access-Control-Allow-Origin', '*');
    
          this.http.post(this.apiUrl + '/assign', JSON.stringify(request), { headers: headers })
            .subscribe(res => {
              resolve(res.json());
            }, (err) => {
              reject(err);
            });
        });
    
      };


}
