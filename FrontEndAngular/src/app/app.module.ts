import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductService } from './services/product.service';
import  {Routes, RouterModule} from '@angular/router';
import { ProductCategoryMenuComponent } from './components/home/product-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/header/cart-status.component';
import { FaIconLibrary,FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartInfoComponent } from './components/cart-info/cart-info.component';
import { ProductNavComponent } from './components/product-nav/product-nav.component';
import { CategoryComponent } from './components/category/category.component';
import { NgxRangeModule } from 'ngx-range';

const routes:Routes  = [

  {path:'checkout',component: CheckoutComponent},
  {path: 'search/:keyword', component: CategoryComponent},
  {path: 'subCategory/:id', component: CategoryComponent},
  {path: 'subCategory', component: CategoryComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'home/:category/:id', component: ProductCategoryMenuComponent },
  {path: 'home', component: ProductCategoryMenuComponent },
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path: '**', redirectTo: '/home',pathMatch: 'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CheckoutComponent,
    CartInfoComponent,
    ProductNavComponent,
    CategoryComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IvyCarouselModule,
    NgbModule,
    FontAwesomeModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    SlickCarouselModule,
    NgxRangeModule

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIconPacks( fas, far);
  }
 }
