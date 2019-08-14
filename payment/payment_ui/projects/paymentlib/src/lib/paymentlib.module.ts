import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import {SharedlibModule} from "sharedlib";
import {PaymentComponent} from './components/payment/payment.component'
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  },
];

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    CommonModule,SharedlibModule.forRoot(), FormsModule,
    RouterModule.forChild(routes), AmexioWidgetModule
  ],
})
export class PaymentLibModule { }
