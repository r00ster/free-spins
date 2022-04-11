import { TestBed } from '@angular/core/testing';

import { FreeSpinService } from './free-spin.service';

describe('FreeSpinService', () => {
  let service: FreeSpinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeSpinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
