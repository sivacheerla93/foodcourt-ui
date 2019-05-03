import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AppService } from './app.service';
import { SharedService } from './shared-service';

// Admin components imports
import { AdminSignInComponent } from './admin/signin/admin-signin.component';
import { ViewFoodcourtsComponent } from './admin/foodcourts/view-foodcourts/view-foodcourts.component';
import { AddFoodcourtComponent } from './admin/foodcourts/add-foodcourt/add-foodcourt.component';
import { UpdateFoodcourtComponent } from './admin/foodcourts/update-foodcourt/update-foodcourt.component';

// Vendor components imports
import { VendorSignInComponent } from './vendor/signin/vendor-signin.component';
import { ViewItemsComponent } from './vendor/manage-menu/view-items/view-items.component';
import { AddItemComponent } from './vendor/manage-menu/add-items/add-item.component';
import { UpdateItemComponent } from './vendor/manage-menu/update-items/update-item.component';
import { ManageOrdersComponent } from './vendor/manage-orders/manage-orders.component';

// Consumer components imports
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './consumer/signup/signup.component';
import { SignInComponent } from './consumer/signin/signin.component';
import { OrderComponent } from './consumer/order/order.component';
import { CheckoutComponent } from './consumer/order/checkout/checkout.component';
import { SuccessComponent } from './consumer/order/success/success.component';


@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  declarations: [AppComponent, HomeComponent, AdminSignInComponent, ViewFoodcourtsComponent,
    AddFoodcourtComponent, UpdateFoodcourtComponent, VendorSignInComponent, ViewItemsComponent,
    AddItemComponent, UpdateItemComponent, ManageOrdersComponent, SignUpComponent,
    SignInComponent, OrderComponent, CheckoutComponent, SuccessComponent],
  providers: [AppService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
