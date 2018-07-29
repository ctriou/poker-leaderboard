import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

/**
 * Availed from:
 * https://jonlabelle.com/snippets/view/javascript/calculate-mean-median-mode-and-range-in-javascript
 */

  mean(numbers): number {
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
    return total / numbers.length;
  }

  median(numbers): number {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var median = 0, numsLen = numbers.length;
    numbers.sort();

    if (
      numsLen % 2 === 0 // is even
    ) {
      // average of two middle numbers
      median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
      // middle number only
      median = numbers[(numsLen - 1) / 2];
    }

    return median;
  }
}
