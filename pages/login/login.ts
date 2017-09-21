import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/authservice/authservice';


import { MydevicelistPage } from '../mydevicelist/mydevicelist';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginData = { username: 'Sourabh', password: '123' };
  loading: any;

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) {

  }

  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      if (result != false) {
        localStorage.setItem('token', JSON.stringify( result));
        this.navCtrl.setRoot(MydevicelistPage);
      }
      else
        this.presentToast("Please enter correct credentials");
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  };

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
