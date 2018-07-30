import { TestBed, inject } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathService]
    });
  });

  it('should be created', inject([MathService], (service: MathService) => {
    expect(service).toBeTruthy();
  }));

  describe('median()', () => {

    it('uses average of two middle values if list is even', inject([MathService], (service: MathService) => {
      expect(service.median([3, 5, 4, 4, 1, 1, 2, 3])).toBe(3);
    }));

    it('uses middle value if list is odd', inject([MathService], (service: MathService) => {
      expect(service.median([1, 2, 3, 4, 5])).toBe(3);
    }));
  });

  describe('mean()', () => {

    it('produces average of a set of numbers', inject([MathService], (service: MathService) => {
      expect(service.median([1, 2, 3, 4, 5])).toBe(3);
    }));

    it('produces average of a set of numbers (2)', inject([MathService], (service: MathService) => {
      expect(service.median([1, 2, 3, 4, 5, 6, 7])).toBe(4);
    }));
  });
});
