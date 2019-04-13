import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsersService } from 'src/app/Services/Users/users.service';
import { NavController } from '@ionic/angular';
var ListUsersComponent = /** @class */ (function () {
    function ListUsersComponent(userService, navCtrl) {
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.users = this.userService.getUsers();
    }
    ListUsersComponent.prototype.ngOnInit = function () { };
    ListUsersComponent.prototype.gtUserDetails = function (u) {
        this.navCtrl.navigateForward("user/" + u.key);
    };
    ListUsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list-users',
            templateUrl: './list-users.component.html',
            styleUrls: ['./list-users.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [UsersService,
            NavController])
    ], ListUsersComponent);
    return ListUsersComponent;
}());
export { ListUsersComponent };
//# sourceMappingURL=list-users.component.js.map