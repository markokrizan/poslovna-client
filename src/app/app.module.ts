import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { WarehousesComponent } from './components/warehouses/warehouses.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductAnalyticsComponent } from './components/product-analytics/product-analytics.component';
import { WarehouseListComponent } from './components/warehouse-list/warehouse-list.component';
import { OrderProductsComponent } from './components/order-products/order-products.component';
import { PendingOrdersComponent } from './components/pending-orders/pending-orders.component';
import { PendingOrderDetailsComponent } from './components/pending-order-details/pending-order-details.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ToolbarComponent,
    WarehousesComponent,
    WarehouseComponent,
    ProductOverviewComponent,
    ProductDetailsComponent,
    ProductAnalyticsComponent,
    WarehouseListComponent,
    OrderProductsComponent,
    PendingOrdersComponent,
    PendingOrderDetailsComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
