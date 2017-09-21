import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { ApprovalserviceProvider } from '../../providers/approvalservice/approvalservice';


@Component({
  selector: 'page-pendingacceptance',
  templateUrl: 'pendingacceptance.html',
})
export class PendingacceptancePage {

  loading: any;
  items: any[];
  selectedItem: any;
  userComment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public approvalService: ApprovalserviceProvider,
    public loadingCtrl: LoadingController) {
    this.showLoader('Fetching Pending Approvals...');

    var userObj = JSON.parse(localStorage.getItem('token'));

    this.approvalService.getPendingAcceptance(userObj._id).then((result) => {
      this.loading.dismiss();
      this.items = result;
    }, (err) => {
      this.loading.dismiss();
    });

  };

  acceptApproval(request: any) {

    this.showLoader('Approving Pending Request...');

    this.approvalService.acceptRequest(request).then((result) => {
      if (!result.acceptancepending) {
        this.items = this.items.filter( i => i._id != result._id);
      }
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
    });
  };

  rejectApproval(request: any) {
    this.showLoader('Rejecting Pending Request...');

    this.approvalService.rejectRequest(request).then((result) => {
      if (!result.acceptancepending) {
        this.items = this.items.filter( i => i._id != result._id);
      }
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
    });
  };

  showLoader(message: string) {
    this.loading = this.loadingCtrl.create({
      content: message
    });

    this.loading.present();
  };

}
