import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";


import { NgxQRCodeModule } from 'ngx-qrcode2';
import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseCred } from './firebaseCred';
import { DashboardComponent } from './Components/MainPages/dashboard/dashboard.component';
import { LoginService } from './Services/Auth/login.service';
import { BannersService } from './Services/Banners/banners.service';
import { AddBannerComponent } from './Components/Banners/add-banner/add-banner.component';
import { ViewBannersComponent } from './Components/Banners/view-banners/view-banners.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { ProductDetailsComponent } from './Components/Products/product-details/product-details.component';
import { ViewProductsComponent } from './Components/Products/view-products/view-products.component';
import { ViewBarcodeComponent } from './Components/Products/view-barcode/view-barcode.component';
import { ProductsService } from './Services/Products/products.service';
import { FaqComponent } from './Components/Extras/Faqs/faq/faq.component';
import { UserFaqComponent } from './Components/Extras/Faqs/user-faq/user-faq.component';
import { VendorFaqComponent } from './Components/Extras/Faqs/vendor-faq/vendor-faq.component';
import { FaqService } from './Services/Faqs/faq.service';
import { ListUsersComponent } from './Components/Users/list-users/list-users.component';
import { UserDetailsComponent } from './Components/Users/user-details/user-details.component';
import { UsersService } from './Services/Users/users.service';
import { SellerService } from './Services/Seller/seller.service';
import { ListSellersComponent } from './Components/Sellers/list-sellers/list-sellers.component';
import { SellerDetailsComponent } from './Components/Sellers/seller-details/seller-details.component';
import { AddTopCategoriesComponent } from './Components/Categories/TopCategories/add-top-categories/add-top-categories.component';
import { ListTopCategoriesComponent } from './Components/Categories/TopCategories/list-top-categories/list-top-categories.component';
import { AddSubCategoriesComponent } from './Components/Categories/SubCategories/add-sub-categories/add-sub-categories.component';
import { ListSubCatItemsComponent } from './Components/Categories/SubCatItem/list-sub-cat-items/list-sub-cat-items.component';
import { ListSubCategoriesComponent } from './Components/Categories/SubCategories/list-sub-categories/list-sub-categories.component';
import { AddSubCatItemsComponent } from './Components/Categories/SubCatItem/add-sub-cat-items/add-sub-cat-items.component';
import { CateoriesService } from './Services/Categories/cateories.service';
import { SpinnerComponent } from './Components/UI/spinner/spinner.component';
import { NotificationComponent } from './Components/Notification/notification/notification.component';
import { NotificationService } from './Services/Notifications/notification.service';
import { NotiPopComponent } from './Components/Notification/noti-pop/noti-pop.component';
import { TopBarComponent } from './Components/UI/top-bar/top-bar.component';
import { TopPushBarComponent } from './Components/UI/top-push-bar/top-push-bar.component';


firebase.initializeApp(firebaseCred);



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBannerComponent,
    ViewBannersComponent,
    LoginComponent,
    ProductDetailsComponent,
    ViewProductsComponent,
    ViewBarcodeComponent,
    FaqComponent,
    UserFaqComponent,
    VendorFaqComponent,
    ListUsersComponent,
    UserDetailsComponent,
    ListSellersComponent,
    SellerDetailsComponent,
    AddTopCategoriesComponent,
    ListTopCategoriesComponent,
    AddSubCategoriesComponent,
    ListSubCategoriesComponent,
    AddSubCatItemsComponent,
    ListSubCatItemsComponent,
    SpinnerComponent,
    TopBarComponent,
    TopPushBarComponent,
    NotificationComponent,
    NotiPopComponent,
  ],
  entryComponents: [
    AddSubCategoriesComponent,
    AddSubCatItemsComponent,
    AddTopCategoriesComponent,
    NotiPopComponent,
    TopBarComponent,
    TopPushBarComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxQRCodeModule,
    ReactiveFormsModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    BannersService,
    ProductsService,
    UsersService,
    FaqService,
    SellerService,
    CateoriesService,
    NotificationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
