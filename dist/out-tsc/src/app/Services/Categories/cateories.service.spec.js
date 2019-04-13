import { TestBed } from '@angular/core/testing';
import { CateoriesService } from './cateories.service';
describe('CateoriesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CateoriesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cateories.service.spec.js.map