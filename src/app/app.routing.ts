import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/signin', component: AdminSignInComponent },
  { path: 'admin/foodcourts/viewall', component: ViewFoodcourtsComponent },
  { path: 'vendor/signin', component: VendorSignInComponent },
  { path: 'consumer/signup', component: SignUpComponent },
  { path: 'consumer/signin', component: SignInComponent },
  { path: 'consumer/order', component: OrderComponent },
  { path: 'consumer/order/checkout', component: CheckoutComponent },
  { path: 'consumer/order/success', component: SuccessComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
