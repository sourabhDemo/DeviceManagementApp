import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';


import { DeviceServiceProvider } from '../../providers/deviceservice/deviceservice';

@Component({
  selector: 'page-mydevicehistory',
  templateUrl: 'mydevicehistory.html',
})
export class MydevicehistoryPage {

  selectedItem: any;
  items: any[];
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deviceService: DeviceServiceProvider,
    public loadingCtrl: LoadingController) {

    this.showLoader();
    
    var deviceId = this.navParams.data.deviceId;
    
    this.deviceService.getMyDeviceHistory(deviceId).then((result) => {
      this.loading.dismiss();
      this.items = result;
    }, (err) => {
      this.loading.dismiss();
    });

  };

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Fetching Devices...'
    });

    this.loading.present();
  };

}
