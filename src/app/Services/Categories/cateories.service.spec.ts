import { TestBed } from '@angular/core/testing';

import { CateoriesService } from './cateories.service';

describe('CateoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CateoriesService = TestBed.get(CateoriesService);
    expect(service).toBeTruthy();
  });
});
