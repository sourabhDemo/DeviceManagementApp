import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { MydevicehistoryPage} from '../mydevicehistory/mydevicehistory';
import { AssigndevicePage } from '../assigndevice/assigndevice';
import { DeviceServiceProvider } from '../../providers/deviceservice/deviceservice';
import { NestedGroupByPipe } from '../../pipes/group-by/nestedgroup-by';

@Component({
  selector: 'page-mydevicelist',
  templateUrl: 'mydevicelist.html',
})
export class MydevicelistPage {

  selectedItem: any;
  items: any[];
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deviceService: DeviceServiceProvider,
    public loadingCtrl: LoadingController) {

    this.showLoader();

    var userObj = JSON.parse(localStorage.getItem('token'));

    this.deviceService.getMyDevices(userObj._id).then((result) => {
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

  deviceHistory(deviceId) {
    this.navCtrl.push(MydevicehistoryPage, {
      deviceId: deviceId
    });
  };

  assignDevice(deviceId) {
    this.navCtrl.push(AssigndevicePage, {
      deviceId: deviceId
    });
  };

}
