import { TestBed } from '@angular/core/testing';

import { LoggsInterceptor } from './loggs.interceptor';

describe('LoggsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoggsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoggsInterceptor = TestBed.inject(LoggsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
