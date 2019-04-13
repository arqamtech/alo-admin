import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/MainPages/dashboard/dashboard.component';
import { ViewBannersComponent } from './Components/Banners/view-banners/view-banners.component';
import { AddBannerComponent } from './Components/Banners/add-banner/add-banner.component';
import { ViewProductsComponent } from './Components/Products/view-products/view-products.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { ViewBarcodeComponent } from './Components/Products/view-barcode/view-barcode.component';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
