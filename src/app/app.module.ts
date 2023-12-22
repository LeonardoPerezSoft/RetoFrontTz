import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import {HttpClientModule } from '@angular/common/http';
import { RegisterProductComponent } from './register-product/register-product.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BuysComponent } from './buys/buys.component';
import { RegisterBuyComponent } from './register-buy/register-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RegisterProductComponent,
    UpdateProductComponent,
    ProductDetailsComponent,
    BuysComponent,
    RegisterBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
