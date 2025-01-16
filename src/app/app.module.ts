import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LandingPageComponent },
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      { path: 'products', component: ProductListComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'update-product/:id', component: UpdateProductComponent },
    ]),
  ],
  bootstrap: [],
})
export class AppModule {}
