import { TestBed } from '@angular/core/testing';

import { PassengerCalculatorService } from './passenger-calculator.service';

describe('PassengerCalculatorService', () => {
  let service: PassengerCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
