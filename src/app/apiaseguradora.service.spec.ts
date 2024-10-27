import { TestBed } from '@angular/core/testing';

import { ApiaseguradoraService } from './apiaseguradora.service';

describe('ApiaseguradoraService', () => {
  let service: ApiaseguradoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiaseguradoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
