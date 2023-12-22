import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { RegisterProductComponent } from './register-product/register-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BuysComponent } from './buys/buys.component';
import { RegisterBuyComponent } from './register-buy/register-buy.component';

const routes: Routes = [
{path: 'productos',component:ProductsComponent},
{path: '', redirectTo:'productos', pathMatch:'full'},
{path: 'register-product',component:RegisterProductComponent},
{path: 'update-product/:id', component:UpdateProductComponent},
{path: 'product-details/:id', component:ProductDetailsComponent},
{path: 'compras', component:BuysComponent},
{path: 'register-buy', component:RegisterBuyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
