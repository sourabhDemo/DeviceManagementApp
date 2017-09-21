import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingacceptancePage } from './pendingacceptance';

@NgModule({
  declarations: [
    PendingacceptancePage,
  ],
  imports: [
    IonicPageModule.forChild(PendingacceptancePage),
  ],
})
export class PendingacceptancePageModule {}
