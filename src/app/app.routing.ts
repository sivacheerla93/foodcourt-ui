import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrderComponent } from './consumer/order.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', component: OrderComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
