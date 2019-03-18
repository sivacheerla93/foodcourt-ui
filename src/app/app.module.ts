import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HomeComponent } from './home/home.component';
import { OrderComponent } from './consumer/order.component';
import { CheckoutComponent } from './consumer/checkout.component';
import { SuccessComponent } from './consumer/success.component';
import { SignUpComponent } from './consumer/signup.component';
import { SignInComponent } from './consumer/signin.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  declarations: [AppComponent, HomeComponent, OrderComponent, CheckoutComponent, SuccessComponent, SignUpComponent, SignInComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
