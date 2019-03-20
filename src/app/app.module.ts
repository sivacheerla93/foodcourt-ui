import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

// Admin components imports
import { AdminSignInComponent } from './admin/signin/admin-signin.component';
import { ViewFoodcourtsComponent } from './admin/foodcourts/view-foodcourts/view-foodcourts.component';

// Vendor components imports
import { VendorSignInComponent } from './vendor/signin/vendor-signin.component';

// Consumer components imports
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './consumer/signup/signup.component';
import { SignInComponent } from './consumer/signin/signin.component';
import { OrderComponent } from './consumer/order/order.component';
import { CheckoutComponent } from './consumer/order/checkout/checkout.component';
import { SuccessComponent } from './consumer/order/success/success.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  declarations: [AppComponent, HomeComponent, AdminSignInComponent, ViewFoodcourtsComponent, VendorSignInComponent, SignUpComponent,
    SignInComponent, OrderComponent, CheckoutComponent, SuccessComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
