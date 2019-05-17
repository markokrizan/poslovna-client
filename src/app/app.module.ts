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
    WarehouseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
