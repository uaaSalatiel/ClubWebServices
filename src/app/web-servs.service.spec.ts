import { TestBed } from '@angular/core/testing';

import { WebServsService } from './web-servs.service';

describe('WebServsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebServsService = TestBed.get(WebServsService);
    expect(service).toBeTruthy();
  });
});
