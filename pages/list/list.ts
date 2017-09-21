import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { DeviceServiceProvider } from '../../providers/deviceservice/deviceservice';
import { GroupByPipe } from '../../pipes/group-by/group-by';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  items: any[];
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deviceService: DeviceServiceProvider,
    public loadingCtrl: LoadingController) {

    this.showLoader();
    this.deviceService.getDevices().then((result) => {
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

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  };

}
