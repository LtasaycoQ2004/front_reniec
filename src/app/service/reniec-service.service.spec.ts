import { TestBed } from '@angular/core/testing';

import { ReniecServiceService } from './reniec-service.service';

describe('ReniecServiceService', () => {
  let service: ReniecServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReniecServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
