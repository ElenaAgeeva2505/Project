import { TestBed } from '@angular/core/testing';

import { FetchingResolver } from './fetching.resolver';

describe('FetchingResolver', () => {
  let resolver: FetchingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FetchingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
