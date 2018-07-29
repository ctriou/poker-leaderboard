import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'winningsDisplay'
})
export class WinningsDisplayPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    if (typeof value !== 'number') {
      return null;
    }

    var millions = (value / 1000000).toFixed(1);
    return `$${millions}M`;
  }
}
