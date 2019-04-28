import { Routes, RouterModule } from '@angular/router';

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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin/signin', component: AdminSignInComponent },
  { path: 'admin/foodcourts/viewall', component: ViewFoodcourtsComponent },
  { path: 'admin/foodcourts/add', component: AddFoodcourtComponent },
  { path: 'admin/foodcourts/update/:id', component: UpdateFoodcourtComponent },
  { path: 'vendor/signin', component: VendorSignInComponent },
  { path: 'vendor/menu/view/:id', component: ViewItemsComponent },
  { path: 'vendor/menu/add/:id', component: AddItemComponent },
  { path: 'vendor/menu/update/:fid/:id', component: UpdateItemComponent },
  { path: 'vendor/orders/manage/:fid', component: ManageOrdersComponent },
  { path: 'consumer/signup', component: SignUpComponent },
  { path: 'consumer/signin', component: SignInComponent },
  { path: 'consumer/order/:id', component: OrderComponent },
  { path: 'consumer/order-checkout/:oid', component: CheckoutComponent },
  { path: 'consumer/order-success', component: SuccessComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
