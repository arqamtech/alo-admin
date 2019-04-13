import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FaqService } from 'src/app/Services/Faqs/faq.service';
var VendorFaqComponent = /** @class */ (function () {
    function VendorFaqComponent(faqService) {
        this.faqService = faqService;
        this.faqs = this.faqService.getUserFaqsV();
    }
    VendorFaqComponent.prototype.ngOnInit = function () {
    };
    VendorFaqComponent.prototype.addFaq = function () {
        var _this = this;
        if (this.faqService.faq.valid) {
            var tempFaq = this.faqService.faq.value;
            this.faqService.addFaqV(tempFaq).then(function () {
                _this.faqService.faq.reset();
            });
        }
    };
    VendorFaqComponent.prototype.deleteFaq = function (f) {
        this.faqService.deleteFaqV(f);
    };
    VendorFaqComponent = tslib_1.__decorate([
        Component({
            selector: 'app-vendor-faq',
            templateUrl: './vendor-faq.component.html',
            styleUrls: ['./vendor-faq.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FaqService])
    ], VendorFaqComponent);
    return VendorFaqComponent;
}());
export { VendorFaqComponent };
//# sourceMappingURL=vendor-faq.component.js.map