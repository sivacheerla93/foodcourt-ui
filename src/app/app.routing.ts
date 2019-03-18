import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrderComponent } from './consumer/order.component';
import { CheckoutComponent } from './consumer/checkout.component';
import { SuccessComponent } from './consumer/success.component';
import { SignUpComponent } from './consumer/signup.component';
import { SignInComponent } from './consumer/signin.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
