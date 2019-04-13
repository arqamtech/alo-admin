import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.appPages = [
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
                icon: 'ios-people'
            },
            {
                title: 'Faqs',
                url: '/faqs',
                icon: 'md-help'
            },
        ];
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map