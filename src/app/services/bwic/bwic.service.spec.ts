import { TestBed } from '@angular/core/testing';

import { BwicService } from './bwic.service';

describe('BwicService', () => {
  let service: BwicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BwicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
