import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehousesComponent } from './components/warehouses/warehouses.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { UserComponent } from './components/user/user.component';
import { OrderProductsComponent } from './components/order-products/order-products.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { PendingOrderDetailsComponent } from './components/pending-order-details/pending-order-details.component';
import { ProductAnalyticsComponent } from './components/product-analytics/product-analytics.component';


const routes: Routes = [
  {path : '', component: WarehousesComponent, pathMatch: 'full'},
  {path : 'user', component: UserComponent, pathMatch: 'full'},
  {path : 'warehouse/:id', component: WarehousesComponent, pathMatch: 'full'},
  {path : 'warehouse/:id/product/:id', component: ProductDetailsComponent, pathMatch: 'full'},
  {path : 'warehouse/:id/product/:id/analytics', component: ProductAnalyticsComponent, pathMatch: 'full'},
  {path : 'order-products', component: OrderProductsComponent, pathMatch: 'full'},
  {path : 'pending-orders', component: PendingOrdersComponent, pathMatch: 'full'},
  {path : 'pending-orders/:id', component: PendingOrderDetailsComponent, pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
