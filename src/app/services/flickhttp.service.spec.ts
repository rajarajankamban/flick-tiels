import { TestBed, inject } from '@angular/core/testing';

import { FlickHttpService } from './flickhttp.service';

describe('FlickService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlickHttpService]
    });
  });

  it('should be created', inject([FlickHttpService], (service: FlickHttpService) => {
    expect(service).toBeTruthy();
  }));
});
