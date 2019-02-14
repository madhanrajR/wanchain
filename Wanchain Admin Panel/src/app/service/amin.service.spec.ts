import { TestBed } from '@angular/core/testing';

import { AminService } from './amin.service';

describe('AminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AminService = TestBed.get(AminService);
    expect(service).toBeTruthy();
  });
});
