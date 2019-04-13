import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'ios-analytics'
    },
    {
      title: 'Banners',
      url: '/banners',
      icon: 'md-images'
    },
    {
      title: 'Sellers',
      url: '/sellers',
      icon: 'logo-ionitron'
    },
    {
      title: 'Products',
      url: '/products',
      icon: 'md-cube'
    },
    {
      title: 'Users',
      url: '/users',
      icon: 'ios-people'
    },
    {
      title: 'Faqs',
      url: '/faqs',
      icon: 'md-help'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
