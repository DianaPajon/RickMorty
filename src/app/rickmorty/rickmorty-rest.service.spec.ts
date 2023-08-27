import { TestBed } from '@angular/core/testing';

import { RickmortyRestService } from './rickmorty-rest.service';

describe('RickmortyRestService', () => {
  let service: RickmortyRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickmortyRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
