import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
var ViewBarcodeComponent = /** @class */ (function () {
    function ViewBarcodeComponent(router) {
        this.router = router;
    }
    ViewBarcodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.prodId = params['id'];
        });
        this.getProduct();
    };
    ViewBarcodeComponent.prototype.getProduct = function () {
        var _this = this;
        firebase.database().ref("Products").child(this.prodId).once("value", function (itemSnap) {
            _this.product = itemSnap.val();
        });
    };
    ViewBarcodeComponent.prototype.pBar = function () {
        window.print();
    };
    ViewBarcodeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-view-barcode',
            templateUrl: './view-barcode.component.html',
            styleUrls: ['./view-barcode.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], ViewBarcodeComponent);
    return ViewBarcodeComponent;
}());
export { ViewBarcodeComponent };
//# sourceMappingURL=view-barcode.component.js.map