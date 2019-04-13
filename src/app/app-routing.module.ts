import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/MainPages/dashboard/dashboard.component';
import { ViewBannersComponent } from './Components/Banners/view-banners/view-banners.component';
import { AddBannerComponent } from './Components/Banners/add-banner/add-banner.component';
import { ViewProductsComponent } from './Components/Products/view-products/view-products.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { ViewBarcodeComponent } from './Components/Products/view-barcode/view-barcode.component';
import { FaqComponent } from './Components/Extras/Faqs/faq/faq.component';
import { UserFaqComponent } from './Components/Extras/Faqs/user-faq/user-faq.component';
import { VendorFaqComponent } from './Components/Extras/Faqs/vendor-faq/vendor-faq.component';
import { ListUsersComponent } from './Components/Users/list-users/list-users.component';
import { UserDetailsComponent } from './Components/Users/user-details/user-details.component';
import { ListSellersComponent } from './Components/Sellers/list-sellers/list-sellers.component';
import { SellerDetailsComponent } from './Components/Sellers/seller-details/seller-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'banners',
    component: ViewBannersComponent,
  },
  {
    path: 'add-banner',
    component: AddBannerComponent,
  },
  {
    path: 'products',
    component: ViewProductsComponent,
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'barcode/:id',
    component: ViewBarcodeComponent,
  },
  {
    path: 'faqs',
    component: FaqComponent,
  },
  {
    path: 'faq-users',
    component: UserFaqComponent,
  },
  {
    path: 'faq-vendors',
    component: VendorFaqComponent,
  },
  {
    path: 'users',
    component: ListUsersComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'sellers',
    component: ListSellersComponent,
  },
  {
    path: 'seller/:id',
    component: SellerDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
