import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MydevicelistPage } from '../pages/mydevicelist/mydevicelist';
import { MydevicehistoryPage } from '../pages/mydevicehistory/mydevicehistory';
import { AssigndevicePage } from '../pages/assigndevice/assigndevice';
import { PendingacceptancePage } from '../pages/pendingacceptance/pendingacceptance';

import { AuthServiceProvider } from '../providers/authservice/authservice';
import { DeviceServiceProvider } from '../providers/deviceservice/deviceservice';
import { UserserviceProvider } from '../providers/userservice/userservice';
import { ApprovalserviceProvider } from '../providers/approvalservice/approvalservice';

import { GroupByPipe } from '../pipes/group-by/group-by';
import { NestedGroupByPipe } from '../pipes/group-by/nestedgroup-by';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    MydevicelistPage,
    MydevicehistoryPage,
    AssigndevicePage,
    PendingacceptancePage,
    GroupByPipe,
    NestedGroupByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MydevicelistPage,
    MydevicehistoryPage,
    AssigndevicePage,
    PendingacceptancePage,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    DeviceServiceProvider,
    UserserviceProvider,
    ApprovalserviceProvider
  ]
})
export class AppModule { }
