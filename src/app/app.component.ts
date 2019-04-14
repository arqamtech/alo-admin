import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NotificationService } from './Services/Notifications/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  unReadNotis;
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
      title: 'Categories',
      url: '/categories',
      icon: 'logo-buffer'
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
      icon: 'ios-people',
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
    private statusBar: StatusBar,
    private notiService: NotificationService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.getNotiNum();
    });
  }
  getNotiNum() {
    this.notiService.getNotificationNum().subscribe(res => (this.unReadNotis = res.length));
    console.log(this.notiService);
    
  }

}
