import { TestBed } from '@angular/core/testing';
import { SellerService } from './seller.service';
describe('SellerService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SellerService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=seller.service.spec.js.map