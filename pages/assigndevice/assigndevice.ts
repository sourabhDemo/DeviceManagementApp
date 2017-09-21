import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { ApprovalserviceProvider } from '../../providers/approvalservice/approvalservice';
import { UserserviceProvider } from '../../providers/userservice/userservice';
/**
 * Generated class for the AssigndevicePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assigndevice',
  templateUrl: 'assigndevice.html',
})
export class AssigndevicePage {

  userlist: any[];
  users: any;
  loading: any;
  deviceId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserserviceProvider,
    private approvalService: ApprovalserviceProvider, public loadingCtrl: LoadingController) {

    this.deviceId = this.navParams.data.deviceId;
    this.showLoader();

    this.userService.getlistofsers().then((result) => {
      this.loading.dismiss();
      this.userlist = result;
    }, (err) => {
      this.loading.dismiss();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssigndevicePage');
  };

  assignDevice() {
    var userObj = JSON.parse(localStorage.getItem('token'));
    var obj = { device: this.deviceId, whoassigned: userObj._id, towhomassigned: this.users };
    this.approvalService.assignDeviceRequest(obj).then((result) => {
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
    });
  };

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Fetching Users...'
    });

    this.loading.present();
  };

}
