import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


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


firebase.initializeApp(firebaseCred);



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBannerComponent,
    ViewBannersComponent,
    LoginComponent,

  ],
  entryComponents: [

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseCred),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxQRCodeModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    BannersService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
