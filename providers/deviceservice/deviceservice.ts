import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DeviceServiceProvider {

    constructor(public http: Http) {

    }

    apiUrl: string = "http://localhost:1337/api/devices";
    data: any[];

    getDevices() {

        return new Promise<any[]>((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');

            this.http.get(this.apiUrl, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    };

    getMyDevices(myid: string) {

        return new Promise<any[]>((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');

            this.http.get(this.apiUrl + "/mydevices/" + myid, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    };

    getMyDeviceHistory(deviceId: string) {

        return new Promise<any[]>((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');

            this.http.get(this.apiUrl + "/mydevicehistory/" + deviceId, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    };

    assignMyDevice(deviceId: string) {

        return new Promise<any[]>((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');

            this.http.get(this.apiUrl + "/assigndevice/" + deviceId, { headers: headers })
                .subscribe(res => {
                    resolve(res.json());
                }, (err) => {
                    reject(err);
                });
        });

    };

}
